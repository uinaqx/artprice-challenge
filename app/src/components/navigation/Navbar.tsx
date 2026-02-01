import { MessageSquare, Image, Video, Music, Code, Zap, Gamepad2, Sparkles, Home } from 'lucide-react';
import type { Category } from '@/data/aiTools';

interface NavbarProps {
  categories: Category[];
  currentPage: 'home' | 'category' | 'games';
  onNavigateHome: () => void;
  onNavigateCategory: (category: Category) => void;
  onNavigateGames: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-4 h-4" />,
  Image: <Image className="w-4 h-4" />,
  Video: <Video className="w-4 h-4" />,
  Music: <Music className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
};

export function Navbar({ categories, currentPage, onNavigateHome, onNavigateCategory, onNavigateGames }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:block">AI导航</span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
            {/* Home */}
            <button
              onClick={onNavigateHome}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                currentPage === 'home'
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">首页</span>
            </button>

            {/* Category Dropdown/Buttons */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigateCategory(category)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  currentPage === 'category'
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {iconMap[category.icon]}
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}

            {/* Games */}
            <button
              onClick={onNavigateGames}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                currentPage === 'games'
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span className="hidden sm:inline">小游戏</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
