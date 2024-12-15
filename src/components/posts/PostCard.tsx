import React from 'react';
import type { Post } from '../../types/post';
import { MessageSquare, Star } from 'lucide-react';
import { PostImage } from './PostImage';

interface PostCardProps {
  post: Post;
  index: number;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-purple-500/10 rounded-xl overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30 cursor-pointer">
      {post.image && (
        <PostImage 
          src={post.image} 
          className="w-full h-48"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-300">Yammer Post</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-bold text-yellow-500">{post.score}/10</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-300 line-clamp-4">{post.post}</p>
        </div>

        {(post.keywords.places?.length > 0 || post.keywords.food?.length > 0) && (
          <div className="space-y-2">
            {post.keywords.places?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.keywords.places.slice(0, 3).map((place) => (
                  <span key={place} className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {place}
                  </span>
                ))}
              </div>
            )}
            {post.keywords.food?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.keywords.food.slice(0, 3).map((food) => (
                  <span key={food} className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {food}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};