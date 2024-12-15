import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { posts } from '../../data/posts';
import { analyzeSentiment } from '../../utils/sentimentAnalysis';

export const SentimentChart = () => {
  const sentiment = analyzeSentiment(posts);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white">Sentiment Distribution</h3>
      <div className="flex flex-col space-y-6">
        {/* Positive Sentiment */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-5 w-5 text-green-500" />
              <span className="text-green-400">Positive</span>
            </div>
            <span className="text-green-400 font-semibold">
              {sentiment.positive} posts ({Math.round(sentiment.positivePercentage)}%)
            </span>
          </div>
          <div className="relative h-4 bg-black/50 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
              style={{ width: `${sentiment.positivePercentage}%` }}
            />
          </div>
        </div>

        {/* Negative Sentiment */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <ThumbsDown className="h-5 w-5 text-red-500" />
              <span className="text-red-400">Negative</span>
            </div>
            <span className="text-red-400 font-semibold">
              {sentiment.negative} posts ({Math.round(sentiment.negativePercentage)}%)
            </span>
          </div>
          <div className="relative h-4 bg-black/50 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-500"
              style={{ width: `${sentiment.negativePercentage}%` }}
            />
          </div>
        </div>

        {/* Average Score */}
        <div className="pt-4 border-t border-white/10">
          <div className="text-center">
            <span className="text-gray-400 text-sm">Average Sentiment Score</span>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {sentiment.averageSentiment.toFixed(1)}/10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};