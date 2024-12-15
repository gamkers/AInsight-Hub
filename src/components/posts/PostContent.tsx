import React from 'react';
import type { Post } from '../../types/post';
import { PostImage } from './PostImage';

interface PostContentProps {
  post: Post;
}

export const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className="prose prose-invert max-w-none">
      {post.image && (
        <div className="mb-6">
          <PostImage 
            src={post.image} 
            className="w-full h-64 md:h-80 rounded-lg"
          />
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-400">Sentiment Analysis</h3>
        <p className="text-gray-300">{post.justification}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-400">Post Content</h3>
        <div className="whitespace-pre-wrap text-gray-300">{post.post}</div>
      </div>
    </div>
  );
};