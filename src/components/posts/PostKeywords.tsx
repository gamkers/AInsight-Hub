import React from 'react';
import type { Post } from '../../types/post';

interface PostKeywordsProps {
  post: Post;
}

export const PostKeywords: React.FC<PostKeywordsProps> = ({ post }) => {
  return (
    <div className="px-4 md:px-6 py-4 space-y-3 overflow-x-auto">
      {post.keywords.places && post.keywords.places.length > 0 && (
        <div className="flex flex-nowrap gap-2 pb-2">
          {post.keywords.places.map((place) => (
            <span
              key={place}
              className="inline-flex flex-shrink-0 px-3 py-1.5 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 whitespace-nowrap"
            >
              {place}
            </span>
          ))}
        </div>
      )}
      {post.keywords.food && post.keywords.food.length > 0 && (
        <div className="flex flex-nowrap gap-2 pb-2">
          {post.keywords.food.map((food) => (
            <span
              key={food}
              className="inline-flex flex-shrink-0 px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 whitespace-nowrap"
            >
              {food}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};