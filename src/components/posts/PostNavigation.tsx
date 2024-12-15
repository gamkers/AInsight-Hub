import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PostNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const PostNavigation: React.FC<PostNavigationProps> = ({ onPrevious, onNext }) => {
  return (
    <div className="flex justify-between items-center px-4 md:px-6 py-4">
      <button
        onClick={onPrevious}
        className="flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Previous</span>
      </button>
      <button
        onClick={onNext}
        className="flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};