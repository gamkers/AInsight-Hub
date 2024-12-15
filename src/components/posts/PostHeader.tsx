import React from 'react';
import { MessageSquare, Star, X } from 'lucide-react';
import type { Post } from '../../types/post';

interface PostHeaderProps {
  post: Post;
  onClose: () => void;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ post, onClose }) => {
  return (
    <div className="sticky top-0 bg-black/90 border-b border-purple-500/20 p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-purple-500" />
          <span className="text-lg font-medium text-gray-300">Yammer Post</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-lg font-bold text-yellow-500">{post.score}/10</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};