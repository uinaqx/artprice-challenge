import { ArrowLeft, ExternalLink, MessageSquare, Image, Video, Music, Code, Zap } from 'lucide-react';
import type { Category } from '@/data/aiTools';

interface CategoryPageProps {
  category: Category;
  onBack: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Image: <Image className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
};

export function CategoryPage({ category, onBack }: CategoryPageProps) {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            返回首页
          </button>

          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
              {iconMap[category.icon]}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{category.name}</h1>
              <p className="text-white/60">共 {category.tools.length} 个工具</p>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.tools.map((tool) => (
            <div
              key={tool.id}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {tool.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                  {category.name}
                </span>
              </div>

              <p className="text-white/60 text-sm mb-6 line-clamp-2">
                {tool.description}
              </p>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02]"
              >
                访问网站
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
