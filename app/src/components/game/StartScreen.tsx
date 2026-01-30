import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp, Palette } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  history: { date: string; accuracy: number }[];
}

export function StartScreen({ onStart, history }: StartScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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
      
      {/* Icon */}
      <div className="mb-8 relative">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f2a93b] to-[#f2880a] flex items-center justify-center shadow-lg shadow-[#f2a93b]/20">
          <Palette className="w-10 h-10 text-black" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
          <Trophy className="w-4 h-4 text-[#f2a93b]" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">
        <span className="bg-gradient-to-r from-[#f2a93b] via-[#f2c84b] to-[#f2880a] bg-clip-text text-transparent">
          ArtPrice Challenge
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#888888] text-center text-lg mb-10 max-w-md">
        测试你的艺术品鉴赏眼力，猜测世界名作的拍卖价格
      </p>

      {/* Start Button */}
      <Button
        onClick={onStart}
        className="relative group px-12 py-6 text-lg font-semibold bg-gradient-to-r from-[#f2a93b] to-[#f2880a] hover:from-[#f2c84b] hover:to-[#f2a93b] text-black rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f2a93b]/30"
      >
        <span className="relative z-10">开始挑战</span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f2c84b] to-[#f2a93b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>

      {/* Game Info */}
      <div className="mt-12 flex items-center gap-8 text-sm text-[#888888]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#f2a93b]" />
          <span>10道题目</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#f2a93b]" />
          <span>真实拍卖数据</span>
        </div>
      </div>

      {/* History Section */}
      {history.length > 0 && (
        <div className="mt-16 w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#f2a93b]" />
              <span className="text-sm text-[#888888]">历史记录</span>
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
