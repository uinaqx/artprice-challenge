import { useState, useEffect, useCallback } from 'react';
import { StartScreen } from '@/components/game/StartScreen';
import { GameScreen } from '@/components/game/GameScreen';
import { ResultScreen } from '@/components/game/ResultScreen';
import { getRandomArtworks, type Artwork } from '@/data/artworks';

type GameState = 'start' | 'playing' | 'result';

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
  const [gameState, setGameState] = useState<GameState>('start');
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

  // Save history to localStorage
  const saveHistory = useCallback((newRecord: HistoryRecord) => {
    setHistory(prev => {
      const updated = [...prev, newRecord].slice(-10);
      localStorage.setItem('artprice-history', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Save leaderboard to localStorage
  const saveLeaderboard = useCallback((entry: LeaderboardEntry) => {
    setLeaderboard(prev => {
      // Check if user already has an entry
      const existingIndex = prev.findIndex(e => e.username === entry.username);
      let updated;

      if (existingIndex >= 0) {
        // Only update if new score is better (higher accuracy, or same accuracy but faster)
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

      // Sort by accuracy (desc), then by time (asc)
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

  const handleStart = useCallback((name: string) => {
    setUsername(name);
    localStorage.setItem('artprice-username', name);
    const selectedArtworks = getRandomArtworks(10);
    setArtworks(selectedArtworks);
    setResults([]);
    setGameStartTime(Date.now());
    setGameState('playing');
  }, []);

  const handleComplete = useCallback((gameResults: GameResult[]) => {
    setResults(gameResults);

    // Calculate average accuracy
    const averageAccuracy = Math.round(
      gameResults.reduce((sum, r) => sum + r.accuracy, 0) / gameResults.length
    );

    // Calculate time taken
    const timeSeconds = Math.round((Date.now() - gameStartTime) / 1000);

    // Save to history
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}/${today.getDate()}`;
    saveHistory({ date: dateStr, accuracy: averageAccuracy });

    // Save to leaderboard
    if (username) {
      saveLeaderboard({
        username,
        accuracy: averageAccuracy,
        timeSeconds,
        date: dateStr,
      });
    }

    setGameState('result');
  }, [saveHistory, saveLeaderboard, username, gameStartTime]);

  const handleRestart = useCallback(() => {
    setGameState('start');
    setArtworks([]);
    setResults([]);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#f2a93b]/30">
      {/* Global background - static black to orange gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-black via-black to-[#f2880a]/20" />

      {/* Content */}
      <div className="relative z-10">
        {gameState === 'start' && (
          <StartScreen
            onStart={handleStart}
            history={history}
            leaderboard={leaderboard}
            defaultUsername={username}
          />
        )}
        
        {gameState === 'playing' && artworks.length > 0 && (
          <GameScreen 
            artworks={artworks} 
            onComplete={handleComplete}
          />
        )}
        
        {gameState === 'result' && (
          <ResultScreen
            results={results}
            onRestart={handleRestart}
            timeSeconds={Math.round((Date.now() - gameStartTime) / 1000)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
