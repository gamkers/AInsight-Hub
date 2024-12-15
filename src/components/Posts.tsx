import React from 'react';
import { PostsSlider } from './posts/PostsSlider';
import { MessageSquareText } from 'lucide-react';

export const Posts = () => {
  return (
    <section id="posts" className="min-h-screen py-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <MessageSquareText className="h-12 w-12 text-purple-500" />
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Yammer Posts Analysis
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore insights from our community's conversations about Chennai, analyzed using advanced sentiment analysis
          </p>
        </div>
        
        <PostsSlider />
      </div>
    </section>
  );
};