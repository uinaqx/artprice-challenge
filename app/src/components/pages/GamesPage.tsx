import { ArrowRight, Trophy, Palette, Sparkles } from 'lucide-react';

interface GamesPageProps {
  onPlayArtPrice: () => void;
}

export function GamesPage({ onPlayArtPrice }: GamesPageProps) {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">休闲娱乐</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">
            AI 小游戏
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            在工作之余，来体验一下有趣的 AI 相关小游戏
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ArtPrice Challenge */}
          <div className="group relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-purple-500/10 border border-orange-500/30 rounded-3xl p-8 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 bg-orange-500/20 rounded-full">
                  <span className="text-xs text-orange-400 font-medium">热门</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                ArtPrice Challenge
              </h2>
              <p className="text-white/60 mb-6">
                测试你的艺术品鉴赏眼力，猜测世界名作的拍卖价格。包含 31 件顶级艺术品，看看你有多懂艺术！
              </p>

              <div className="flex items-center gap-4 mb-6 text-sm text-white/40">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span>排行榜</span>
                </div>
                <div>10 道题</div>
                <div>真实拍卖数据</div>
              </div>

              <button
                onClick={onPlayArtPrice}
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02]"
              >
                开始挑战
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* More Games Coming Soon */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Sparkles className="w-10 h-10 text-white/40" />
            </div>
            <h3 className="text-xl font-bold text-white/60 mb-2">更多游戏</h3>
            <p className="text-white/40">敬请期待...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
