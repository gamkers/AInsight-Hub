import React from 'react';
import { Brain, BarChart } from 'lucide-react';
import { FloatingIcons } from './ui/FloatingIcons';
import { GradientBackground } from './ui/GradientBackground';

export const Home = () => {
  return (
    <div className="pt-16 relative">
      <GradientBackground />
      <FloatingIcons />
      <section id="home" className="min-h-screen relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Brain className="h-20 w-20 text-purple-500 animate-pulse" />
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient">
          AInsight Hub
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover deep insights from Yammer conversations using advanced sentiment analysis and natural language processing
          </p>
          <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <BarChart className="h-6 w-6 text-purple-500" />
            <span className="text-lg text-gray-300">
              Analyzing <span className="text-purple-500 font-semibold">Yammer</span> posts with sentiment analysis
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};