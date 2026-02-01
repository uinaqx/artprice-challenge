import { useState, useCallback, useEffect } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { HomePage } from '@/components/pages/HomePage';
import { CategoryPage } from '@/components/pages/CategoryPage';
import { GamesPage } from '@/components/pages/GamesPage';
import { GameScreen } from '@/components/game/GameScreen';
import { ResultScreen } from '@/components/game/ResultScreen';
import { StartScreen } from '@/components/game/StartScreen';
import { getRandomArtworks, type Artwork } from '@/data/artworks';
import { getRandomTool, categories, type AITool, type Category } from '@/data/aiTools';

type PageState = 'home' | 'category' | 'games' | 'game-playing' | 'game-result';

interface GameResult {
  artwork: Artwork;
  selectedPrice: number;
  accuracy: number;
}

interface HistoryRecord {
  date: string;
  accuracy: number;
}

export interface LeaderboardEntry {
  username: string;
  accuracy: number;
  timeSeconds: number;
  date: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [featuredTool, setFeaturedTool] = useState<AITool>(getRandomTool());

  // Game states
  const [gameState, setGameState] = useState<'start' | 'playing' | 'result'>('start');
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [results, setResults] = useState<GameResult[]>([]);
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [username, setUsername] = useState<string>('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [gameStartTime, setGameStartTime] = useState<number>(0);

  // Load history and leaderboard from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('artprice-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse history:', e);
      }
    }

    const savedLeaderboard = localStorage.getItem('artprice-leaderboard');
    if (savedLeaderboard) {
      try {
        setLeaderboard(JSON.parse(savedLeaderboard));
      } catch (e) {
        console.error('Failed to parse leaderboard:', e);
      }
    }

    const savedUsername = localStorage.getItem('artprice-username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  // Navigation handlers
  const handleNavigateHome = useCallback(() => {
    setCurrentPage('home');
    setFeaturedTool(getRandomTool());
    setSelectedCategory(null);
  }, []);

  const handleNavigateCategory = useCallback((category: Category) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  }, []);

  const handleNavigateGames = useCallback(() => {
    setCurrentPage('games');
    setGameState('start');
  }, []);

  const handleNavigateToGame = useCallback(() => {
    setCurrentPage('game-playing');
    setGameState('start');
  }, []);

  // Game handlers
  const saveHistory = useCallback((newRecord: HistoryRecord) => {
    setHistory(prev => {
      const updated = [...prev, newRecord].slice(-10);
      localStorage.setItem('artprice-history', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const saveLeaderboard = useCallback((entry: LeaderboardEntry) => {
    setLeaderboard(prev => {
      const existingIndex = prev.findIndex(e => e.username === entry.username);
      let updated;

      if (existingIndex >= 0) {
        const existing = prev[existingIndex];
        const isBetter = entry.accuracy > existing.accuracy ||
          (entry.accuracy === existing.accuracy && entry.timeSeconds < existing.timeSeconds);

        if (isBetter) {
          updated = [...prev];
          updated[existingIndex] = entry;
        } else {
          return prev;
        }
      } else {
        updated = [...prev, entry];
      }

      updated.sort((a, b) => {
        if (b.accuracy !== a.accuracy) {
          return b.accuracy - a.accuracy;
        }
        return a.timeSeconds - b.timeSeconds;
      });

      localStorage.setItem('artprice-leaderboard', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleGameStart = useCallback((name: string) => {
    setUsername(name);
    localStorage.setItem('artprice-username', name);
    const selectedArtworks = getRandomArtworks(10);
    setArtworks(selectedArtworks);
    setResults([]);
    setGameStartTime(Date.now());
    setGameState('playing');
  }, []);

  const handleGameComplete = useCallback((gameResults: GameResult[]) => {
    setResults(gameResults);

    const averageAccuracy = Math.round(
      gameResults.reduce((sum, r) => sum + r.accuracy, 0) / gameResults.length
    );

    const timeSeconds = Math.round((Date.now() - gameStartTime) / 1000);

    const today = new Date();
    const dateStr = `${today.getMonth() + 1}/${today.getDate()}`;
    saveHistory({ date: dateStr, accuracy: averageAccuracy });

    if (username) {
      saveLeaderboard({
        username,
        accuracy: averageAccuracy,
        timeSeconds,
        date: dateStr,
      });
    }

    setGameState('result');
    setCurrentPage('game-result');
  }, [saveHistory, saveLeaderboard, username, gameStartTime]);

  const handleGameRestart = useCallback(() => {
    setGameState('start');
    setArtworks([]);
    setResults([]);
    setCurrentPage('games');
  }, []);

  const handleBackFromGame = useCallback(() => {
    setCurrentPage('games');
    setGameState('start');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      {/* Global background - top to bottom orange-black gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-orange-900/30 via-black to-black" />

      {/* Navigation */}
      <Navbar
        categories={categories}
        currentPage={currentPage === 'home' ? 'home' : currentPage === 'games' || currentPage === 'game-playing' || currentPage === 'game-result' ? 'games' : 'category'}
        currentCategoryId={selectedCategory?.id || null}
        onNavigateHome={handleNavigateHome}
        onNavigateCategory={handleNavigateCategory}
        onNavigateGames={handleNavigateGames}
      />

      {/* Content */}
      <div className="relative z-10 pt-16">
        {currentPage === 'home' && (
          <HomePage
            featuredTool={featuredTool}
            categories={categories}
            onNavigateCategory={handleNavigateCategory}
            onNavigateGames={handleNavigateGames}
            onRefreshFeatured={() => setFeaturedTool(getRandomTool())}
          />
        )}

        {currentPage === 'category' && selectedCategory && (
          <CategoryPage
            category={selectedCategory}
            onBack={handleNavigateHome}
          />
        )}

        {currentPage === 'games' && (
          <GamesPage
            onPlayArtPrice={handleNavigateToGame}
          />
        )}

        {currentPage === 'game-playing' && gameState === 'start' && (
          <div className="min-h-screen flex flex-col">
            <button
              onClick={handleBackFromGame}
              className="absolute top-20 left-4 z-50 px-4 py-2 text-sm text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all"
            >
              ← 返回小游戏
            </button>
            <StartScreen
              onStart={handleGameStart}
              history={history}
              leaderboard={leaderboard}
              defaultUsername={username}
            />
          </div>
        )}

        {currentPage === 'game-playing' && gameState === 'playing' && artworks.length > 0 && (
          <div className="min-h-screen flex flex-col">
            <button
              onClick={handleBackFromGame}
              className="absolute top-20 left-4 z-50 px-4 py-2 text-sm text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all"
            >
              ← 退出游戏
            </button>
            <GameScreen
              artworks={artworks}
              onComplete={handleGameComplete}
            />
          </div>
        )}

        {currentPage === 'game-result' && (
          <div className="min-h-screen flex flex-col">
            <button
              onClick={handleBackFromGame}
              className="absolute top-20 left-4 z-50 px-4 py-2 text-sm text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all"
            >
              ← 返回小游戏
            </button>
            <ResultScreen
              results={results}
              onRestart={handleGameRestart}
              timeSeconds={Math.round((Date.now() - gameStartTime) / 1000)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
