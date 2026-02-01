import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, User, Trophy, Clock, Medal } from 'lucide-react';
import type { LeaderboardEntry } from '@/App';

interface StartScreenProps {
  onStart: (username: string) => void;
  history: { date: string; accuracy: number }[];
  leaderboard: LeaderboardEntry[];
  defaultUsername: string;
}

export function StartScreen({ onStart, history, leaderboard, defaultUsername }: StartScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState(defaultUsername);
  const [error, setError] = useState('');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      child.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 150}ms`;

      setTimeout(() => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, 50);
    }
  }, []);

  const handleStart = () => {
    if (!username.trim()) {
      setError('请输入用户名');
      return;
    }
    if (username.trim().length < 2) {
      setError('用户名至少需要2个字符');
      return;
    }
    if (username.trim().length > 20) {
      setError('用户名不能超过20个字符');
      return;
    }
    onStart(username.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleStart();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const averageAccuracy = history.length > 0
    ? Math.round(history.reduce((sum, h) => sum + h.accuracy, 0) / history.length)
    : 0;

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#f2a93b]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">
        <span className="bg-gradient-to-r from-[#f2a93b] via-[#f2c84b] to-[#f2880a] bg-clip-text text-transparent">
          ArtPrice Challenge
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#888888] text-center text-lg mb-8 max-w-md">
        测试你的艺术品鉴赏眼力，猜测世界名作的拍卖价格
      </p>

      {/* Username Input */}
      <div className="w-full max-w-sm mb-6">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            onKeyDown={handleKeyDown}
            placeholder="输入你的用户名"
            className="w-full pl-12 pr-4 py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-[#666666] focus:outline-none focus:border-[#f2a93b] transition-colors"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-2 ml-1">{error}</p>
        )}
      </div>

      {/* Start Button */}
      <Button
        onClick={handleStart}
        className="relative group px-12 py-6 text-lg font-semibold bg-gradient-to-r from-[#f2a93b] to-[#f2880a] hover:from-[#f2c84b] hover:to-[#f2a93b] text-black rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f2a93b]/30"
      >
        <span className="relative z-10">开始挑战</span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f2c84b] to-[#f2a93b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>

      {/* Game Info */}
      <div className="mt-8 flex items-center gap-8 text-sm text-[#888888]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#f2a93b]" />
          <span>10道题目</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#f2a93b]" />
          <span>真实拍卖数据</span>
        </div>
      </div>

      {/* Leaderboard Section */}
      {leaderboard.length > 0 && (
        <div className="mt-12 w-full max-w-lg">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-[#f2a93b]" />
            <span className="text-lg font-semibold text-white">排行榜</span>
            <span className="text-xs text-[#666666] ml-2">（准确率优先，同准确率用时短者胜）</span>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-[#2a2a2a]/50 text-xs text-[#888888]">
              <div className="col-span-2 text-center">排名</div>
              <div className="col-span-5">玩家</div>
              <div className="col-span-3 text-center">准确率</div>
              <div className="col-span-2 text-center">用时</div>
            </div>

            {/* Entries */}
            <div className="divide-y divide-[#2a2a2a]">
              {leaderboard.slice(0, 10).map((entry, index) => {
                const isCurrentUser = entry.username === defaultUsername;
                const rank = index + 1;

                return (
                  <div
                    key={entry.username}
                    className={`grid grid-cols-12 gap-2 px-4 py-3 items-center ${
                      isCurrentUser ? 'bg-[#f2a93b]/10' : ''
                    }`}
                  >
                    <div className="col-span-2 flex justify-center">
                      {rank === 1 ? (
                        <Medal className="w-5 h-5 text-yellow-500" />
                      ) : rank === 2 ? (
                        <Medal className="w-5 h-5 text-gray-400" />
                      ) : rank === 3 ? (
                        <Medal className="w-5 h-5 text-amber-700" />
                      ) : (
                        <span className="text-[#888888] text-sm">{rank}</span>
                      )}
                    </div>
                    <div className="col-span-5">
                      <span className={`text-sm truncate block ${isCurrentUser ? 'text-[#f2a93b] font-medium' : 'text-white'}`}>
                        {entry.username}
                        {isCurrentUser && <span className="text-xs ml-1 text-[#666666]">(你)</span>}
                      </span>
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="text-sm font-medium text-[#f2a93b]">{entry.accuracy}%</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="text-xs text-[#888888] flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTime(entry.timeSeconds)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Personal History Section */}
      {history.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#f2a93b]" />
              <span className="text-sm text-[#888888]">个人历史记录</span>
            </div>
            <span className="text-sm text-[#f2a93b] font-medium">
              平均准确率: {averageAccuracy}%
            </span>
          </div>

          <div className="space-y-2">
            {history.slice(-5).reverse().map((record, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]"
              >
                <span className="text-sm text-[#888888]">{record.date}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#f2a93b] to-[#f2880a] rounded-full transition-all duration-500"
                      style={{ width: `${record.accuracy}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-white w-12 text-right">
                    {record.accuracy}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
