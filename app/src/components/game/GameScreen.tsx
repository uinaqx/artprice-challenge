import { useState, useEffect } from 'react';
import { formatPrice, generatePriceOptions, calculateAccuracy, type Artwork } from '@/data/artworks';
import { Button } from '@/components/ui/button';
import { Check, X, ChevronRight, ImageOff } from 'lucide-react';

interface GameScreenProps {
  artworks: Artwork[];
  onComplete: (results: { artwork: Artwork; selectedPrice: number; accuracy: number }[]) => void;
}

export function GameScreen({ artworks, onComplete }: GameScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [priceOptions, setPriceOptions] = useState<number[]>([]);
  const [results, setResults] = useState<{ artwork: Artwork; selectedPrice: number; accuracy: number }[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const currentArtwork = artworks[currentIndex];
  const progress = ((currentIndex + 1) / artworks.length) * 100;

  useEffect(() => {
    if (currentArtwork) {
      setPriceOptions(generatePriceOptions(currentArtwork.price));
      setSelectedPrice(null);
      setShowResult(false);
      setImageLoaded(false);
      setImageError(false);
    }
  }, [currentArtwork]);

  const handleSelectPrice = (price: number) => {
    if (showResult) return;
    
    setSelectedPrice(price);
    setShowResult(true);
    
    const accuracy = calculateAccuracy(price, currentArtwork.price);
    setResults(prev => [...prev, { artwork: currentArtwork, selectedPrice: price, accuracy }]);
  };

  const handleNext = () => {
    if (currentIndex < artworks.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      onComplete(results);
    }
  };

  const isCorrect = selectedPrice === currentArtwork.price;
  const currentAccuracy = selectedPrice !== null 
    ? calculateAccuracy(selectedPrice, currentArtwork.price)
    : 0;

  const averageAccuracy = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.accuracy, 0) / results.length)
    : 0;

  return (
    <div className="h-screen flex flex-col px-4 py-4 overflow-hidden">
      {/* Header */}
      <div className="mb-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#888888]">
            题目 {currentIndex + 1} / {artworks.length}
          </span>
          <span className="text-sm text-[#f2a93b]">
            当前准确率: {averageAccuracy}%
          </span>
        </div>
        <div className="h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#f2a93b] to-[#f2880a] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div
        className={`flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}
      >
        {/* Left Column - Artwork Image & Info */}
        <div className="flex flex-col gap-4 overflow-hidden">
          {/* Artwork Image */}
          <div className="relative flex-1 min-h-0">
            <div className="h-full bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2a2a2a] flex items-center justify-center">
              {!imageError ? (
                <img
                  src={currentArtwork.image}
                  alt={currentArtwork.title}
                  className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#888888]">
                  <ImageOff className="w-16 h-16 mb-4" />
                  <span>图片加载失败</span>
                </div>
              )}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-[#f2a93b] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>

            {/* Type Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-[#f2a93b]">
              {currentArtwork.type}
            </div>
          </div>

          {/* Artwork Info */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-1 font-serif">
              {currentArtwork.title}
            </h2>
            <p className="text-[#f2a93b] text-base mb-1">
              {currentArtwork.artist}
            </p>
            <p className="text-[#888888] text-sm mb-2">
              {currentArtwork.year}
            </p>
            <p className="text-[#666666] text-sm line-clamp-2">
              {currentArtwork.description}
            </p>
          </div>
        </div>

        {/* Right Column - Options & Result */}
        <div className="flex flex-col justify-center gap-4">
          {/* Price Options - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3">
            {priceOptions.map((price, index) => {
              const isSelected = selectedPrice === price;
              const isCorrectAnswer = price === currentArtwork.price;

              let buttonClass = 'bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#f2a93b]/50';

              if (showResult) {
                if (isCorrectAnswer) {
                  buttonClass = 'bg-green-500/20 border-green-500';
                } else if (isSelected && !isCorrectAnswer) {
                  buttonClass = 'bg-red-500/20 border-red-500';
                } else {
                  buttonClass = 'bg-[#1a1a1a] border-[#2a2a2a] opacity-50';
                }
              } else if (isSelected) {
                buttonClass = 'bg-[#f2a93b]/20 border-[#f2a93b]';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectPrice(price)}
                  disabled={showResult}
                  className={`relative p-4 lg:p-6 rounded-xl border-2 transition-all duration-300 ${buttonClass}`}
                >
                  <span className="text-base lg:text-lg font-semibold text-white">
                    {formatPrice(price)}
                  </span>

                  {showResult && isCorrectAnswer && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  )}

                  {showResult && isSelected && !isCorrectAnswer && (
                    <div className="absolute top-2 right-2">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Result Display */}
          {showResult && (
            <div className="text-center animate-in fade-in duration-500">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2 ${
                isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-[#f2a93b]/20 text-[#f2a93b]'
              }`}>
                {isCorrect ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span className="font-medium">完全正确!</span>
                  </>
                ) : (
                  <>
                    <span className="font-medium">准确率: {currentAccuracy}%</span>
                  </>
                )}
              </div>
              <p className="text-[#888888] text-sm">
                真实价格: <span className="text-[#f2a93b] font-semibold">{formatPrice(currentArtwork.price)}</span>
              </p>
            </div>
          )}

          {/* Next Button */}
          {showResult && (
            <div className="flex justify-center">
              <Button
                onClick={handleNext}
                className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-[#f2a93b] to-[#f2880a] hover:from-[#f2c84b] hover:to-[#f2a93b] text-black rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                {currentIndex < artworks.length - 1 ? '下一题' : '查看结果'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
