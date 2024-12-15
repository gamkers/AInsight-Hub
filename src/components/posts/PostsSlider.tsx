import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PostCard } from './PostCard';
import { PostModal } from './PostModal';
import { posts } from '../../data/posts';

export const PostsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(posts.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(posts.length / 3)) % Math.ceil(posts.length / 3));
  };

  const handleNextPost = () => {
    if (selectedPostIndex !== null) {
      setSelectedPostIndex((prev) => (prev + 1) % posts.length);
    }
  };

  const handlePreviousPost = () => {
    if (selectedPostIndex !== null) {
      setSelectedPostIndex((prev) => (prev - 1 + posts.length) % posts.length);
    }
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {posts.slice(pageIndex * 3, (pageIndex + 1) * 3).map((post, idx) => {
                const postIndex = pageIndex * 3 + idx;
                return (
                  <div key={postIndex} className="h-full">
                    <div 
                      onClick={() => setSelectedPostIndex(postIndex)}
                      className="h-full"
                    >
                      <PostCard post={post} index={postIndex} />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-purple-500/20 text-purple-500 hover:bg-purple-500/10 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-purple-500/20 text-purple-500 hover:bg-purple-500/10 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {selectedPostIndex !== null && (
        <PostModal
          post={posts[selectedPostIndex]}
          isOpen={true}
          onClose={() => setSelectedPostIndex(null)}
          onNext={handleNextPost}
          onPrevious={handlePreviousPost}
        />
      )}
    </div>
  );
};