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

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [results, setResults] = useState<GameResult[]>([]);
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('artprice-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse history:', e);
      }
    }
  }, []);

  // Save history to localStorage
  const saveHistory = useCallback((newRecord: HistoryRecord) => {
    setHistory(prev => {
      const updated = [...prev, newRecord].slice(-10); // Keep last 10 records
      localStorage.setItem('artprice-history', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleStart = useCallback(() => {
    const selectedArtworks = getRandomArtworks(10);
    setArtworks(selectedArtworks);
    setResults([]);
    setGameState('playing');
  }, []);

  const handleComplete = useCallback((gameResults: GameResult[]) => {
    setResults(gameResults);
    
    // Calculate average accuracy
    const averageAccuracy = Math.round(
      gameResults.reduce((sum, r) => sum + r.accuracy, 0) / gameResults.length
    );
    
    // Save to history
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}/${today.getDate()}`;
    saveHistory({ date: dateStr, accuracy: averageAccuracy });
    
    setGameState('result');
  }, [saveHistory]);

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
          />
        )}
      </div>
    </div>
  );
}

export default App;
