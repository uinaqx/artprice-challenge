import { ArrowRight, RefreshCw, Sparkles, MessageSquare, Image, Video, Music, Code, Zap, Gamepad2 } from 'lucide-react';
import type { AITool, Category } from '@/data/aiTools';

interface HomePageProps {
  featuredTool: AITool;
  categories: Category[];
  onNavigateCategory: (category: Category) => void;
  onNavigateGames: () => void;
  onRefreshFeatured: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Image: <Image className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

export function HomePage({ featuredTool, categories, onNavigateCategory, onNavigateGames, onRefreshFeatured }: HomePageProps) {
  const category = categories.find(c => c.id === featuredTool.category);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Featured Tool */}
      <section className="relative px-4 pt-12 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">每日推荐 AI 工具</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif">
              发现下一个<br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                AI 生产力工具
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              精选全球最优秀的 AI 工具，助你提升工作效率，释放创造力
            </p>
          </div>

          {/* Featured Tool Card */}
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Tool Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {category && (
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                        {iconMap[category.icon]}
                        {category.name}
                      </span>
                    )}
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    {featuredTool.name}
                  </h2>
                  <p className="text-white/70 text-lg mb-6 max-w-xl">
                    {featuredTool.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={featuredTool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-semibold rounded-xl transition-all hover:scale-105"
                    >
                      立即访问
                      <ArrowRight className="w-5 h-5" />
                    </a>

                    <button
                      onClick={onRefreshFeatured}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20"
                    >
                      <RefreshCw className="w-5 h-5" />
                      换一个
                    </button>
                  </div>
                </div>

                {/* Tool URL Preview */}
                <div className="hidden lg:block">
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-white/40 text-sm mb-2">访问地址</p>
                    <p className="text-orange-400 font-mono text-lg">{featuredTool.url}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            探索 AI 工具分类
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigateCategory(category)}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all text-left overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    {iconMap[category.icon]}
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-white/50 text-sm">{category.tools.length} 个工具</p>

                  <div className="mt-4 flex items-center gap-1 text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    查看全部
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}

            {/* Games Card */}
            <button
              onClick={onNavigateGames}
              className="group relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 rounded-2xl p-6 transition-all text-left overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-1">小游戏</h3>
                <p className="text-white/50 text-sm">休闲娱乐</p>

                <div className="mt-4 flex items-center gap-1 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  开始游戏
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
          <p>AI 导航站 - 发现最实用的 AI 工具</p>
        </div>
      </footer>
    </div>
  );
}
