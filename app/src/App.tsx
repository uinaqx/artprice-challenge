import { useState, useCallback, useEffect } from 'react';
import { GameScreen } from '@/components/game/GameScreen';
import { ResultScreen } from '@/components/game/ResultScreen';
import { StartScreen } from '@/components/game/StartScreen';
import { getRandomArtworks, type Artwork } from '@/data/artworks';

type PageState = 'start' | 'playing' | 'result';

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
  const [currentPage, setCurrentPage] = useState<PageState>('start');
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
    setArtworks(getRandomArtworks(10));
    setResults([]);
    setGameStartTime(Date.now());
    setCurrentPage('playing');
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

    setCurrentPage('result');
  }, [saveHistory, saveLeaderboard, username, gameStartTime]);

  const handleGameRestart = useCallback(() => {
    setArtworks([]);
    setResults([]);
    setCurrentPage('start');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-orange-900/30 via-black to-black" />

      <div className="relative z-10">
        {currentPage === 'start' && (
          <StartScreen
            onStart={handleGameStart}
            history={history}
            leaderboard={leaderboard}
            defaultUsername={username}
          />
        )}

        {currentPage === 'playing' && artworks.length > 0 && (
          <GameScreen
            artworks={artworks}
            onComplete={handleGameComplete}
          />
        )}

        {currentPage === 'result' && (
          <ResultScreen
            results={results}
            onRestart={handleGameRestart}
            timeSeconds={Math.round((Date.now() - gameStartTime) / 1000)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
