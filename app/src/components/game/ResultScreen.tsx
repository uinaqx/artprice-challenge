import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, RotateCcw, Share2, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { formatPrice, type Artwork } from '@/data/artworks';

interface ResultScreenProps {
  results: { artwork: Artwork; selectedPrice: number; accuracy: number }[];
  onRestart: () => void;
}

export function ResultScreen({ results, onRestart }: ResultScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayScore, setDisplayScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const totalAccuracy = Math.round(results.reduce((sum, r) => sum + r.accuracy, 0) / results.length);
  const correctCount = results.filter(r => r.accuracy === 100).length;
  const bestResult = results.reduce((best, r) => r.accuracy > best.accuracy ? r : best, results[0]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate children
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

    // Animate score counter
    const duration = 1500;
    const steps = 60;
    const increment = totalAccuracy / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= totalAccuracy) {
        setDisplayScore(totalAccuracy);
        clearInterval(timer);
        setTimeout(() => setShowDetails(true), 300);
      } else {
        setDisplayScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [totalAccuracy]);

  const getRating = (score: number) => {
    if (score >= 90) return { text: '艺术大师', icon: Trophy, color: 'from-[#f2a93b] to-[#f2c84b]' };
    if (score >= 70) return { text: '鉴赏专家', icon: Award, color: 'from-[#f2a93b] to-[#f2880a]' };
    if (score >= 50) return { text: '艺术爱好者', icon: Target, color: 'from-[#f2880a] to-[#f2a93b]' };
    return { text: '艺术新手', icon: TrendingUp, color: 'from-[#888888] to-[#666666]' };
  };

  const rating = getRating(totalAccuracy);
  const RatingIcon = rating.icon;

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8"
    >
      {/* Score Card */}
      <div className="w-full max-w-2xl bg-[#1a1a1a] rounded-3xl border border-[#2a2a2a] p-8 md:p-12 mb-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f2a93b]/20 to-[#f2880a]/20 mb-4">
            <Trophy className="w-8 h-8 text-[#f2a93b]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-serif">
            挑战完成!
          </h1>
          <p className="text-[#888888]">
            你完成了 {results.length} 道艺术品价格猜测
          </p>
        </div>

        {/* Score Display */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <span 
              className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#f2a93b] via-[#f2c84b] to-[#f2880a] bg-clip-text text-transparent font-serif"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {displayScore}
            </span>
            <span className="text-3xl md:text-4xl font-bold text-[#f2a93b]">%</span>
          </div>
          <p className="text-[#888888] mt-2">综合准确率</p>
        </div>

        {/* Rating Badge */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${rating.color} text-black font-semibold`}>
            <RatingIcon className="w-5 h-5" />
            <span>{rating.text}</span>
          </div>
        </div>

        {/* Stats Grid */}
        {showDetails && (
          <div className="grid grid-cols-3 gap-4 animate-in fade-in duration-500">
            <div className="text-center p-4 bg-[#2a2a2a]/50 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-2xl font-bold text-white">{correctCount}</span>
              </div>
              <p className="text-xs text-[#888888]">完全正确</p>
            </div>
            <div className="text-center p-4 bg-[#2a2a2a]/50 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Target className="w-4 h-4 text-[#f2a93b]" />
                <span className="text-2xl font-bold text-white">{results.length}</span>
              </div>
              <p className="text-xs text-[#888888]">总题数</p>
            </div>
            <div className="text-center p-4 bg-[#2a2a2a]/50 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Award className="w-4 h-4 text-[#f2a93b]" />
                <span className="text-2xl font-bold text-white">{bestResult.accuracy}%</span>
              </div>
              <p className="text-xs text-[#888888]">最佳表现</p>
            </div>
          </div>
        )}
      </div>

      {/* Details List */}
      {showDetails && (
        <div className="w-full max-w-2xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-gradient-to-b from-[#f2a93b] to-[#f2880a] rounded-full" />
            答题详情
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {results.map((result, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    result.accuracy === 100 ? 'bg-green-500/20' : 'bg-[#f2a93b]/20'
                  }`}>
                    {result.accuracy === 100 ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <span className="text-xs font-bold text-[#f2a93b]">{result.accuracy}%</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-white truncate">{result.artwork.title}</p>
                    <p className="text-xs text-[#888888]">{result.artwork.artist}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <p className="text-xs text-[#888888]">你的猜测</p>
                  <p className={`text-sm font-medium ${
                    result.accuracy === 100 ? 'text-green-400' : 'text-[#f2a93b]'
                  }`}>
                    {formatPrice(result.selectedPrice)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Button
          onClick={onRestart}
          className="flex-1 px-8 py-5 text-lg font-semibold bg-gradient-to-r from-[#f2a93b] to-[#f2880a] hover:from-[#f2c84b] hover:to-[#f2a93b] text-black rounded-xl transition-all duration-300 hover:-translate-y-1"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          再玩一次
        </Button>
        <Button
          onClick={() => {
            const text = `我在ArtPrice Challenge中获得了${totalAccuracy}%的准确率，被评为"${rating.text}"！快来挑战你的艺术品鉴赏眼力吧！`;
            if (navigator.share) {
              navigator.share({ title: 'ArtPrice Challenge', text });
            } else {
              navigator.clipboard.writeText(text);
            }
          }}
          variant="outline"
          className="flex-1 px-8 py-5 text-lg font-semibold border-[#2a2a2a] text-white hover:bg-[#1a1a1a] hover:border-[#f2a93b]/50 rounded-xl transition-all duration-300"
        >
          <Share2 className="w-5 h-5 mr-2" />
          分享成绩
        </Button>
      </div>
    </div>
  );
}
