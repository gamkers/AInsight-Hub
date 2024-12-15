import React from 'react';
import { BarChart3 } from 'lucide-react';
import { AnalyticsSummary } from './analysis/AnalyticsSummary';
import { SentimentChart } from './analysis/SentimentChart';
import { KeywordCloud } from './analysis/KeywordCloud';
import { PlacesAndFoods } from './analysis/PlacesAndFoods';

export const Analysis = () => {
  return (
    <section id="analysis" className="min-h-screen py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <BarChart3 className="h-12 w-12 text-purple-500" />
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Sentiment Analysis Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deep dive into the sentiment patterns and key topics discussed in Yammer conversations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnalyticsSummary />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6">
            <SentimentChart />
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6">
            <KeywordCloud />
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6">
          <PlacesAndFoods />
        </div>
      </div>
    </section>
  );
};