import React from 'react';
import { MessageSquareText, TrendingUp, MapPin, Utensils } from 'lucide-react';
import { posts } from '../../data/posts';
import { analyzeSentiment } from '../../utils/sentimentAnalysis';

const calculateStats = () => {
  const sentiment = analyzeSentiment(posts);
  const totalLocations = posts.reduce((acc, post) => acc + (post.keywords.places?.length || 0), 0);
  const totalFoodMentions = posts.reduce((acc, post) => acc + (post.keywords.food?.length || 0), 0);

  return { 
    totalPosts: sentiment.totalPosts,
    averageSentiment: sentiment.averageSentiment,
    totalLocations,
    totalFoodMentions
  };
};

export const AnalyticsSummary = () => {
  const stats = calculateStats();

  const summaryCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: MessageSquareText,
      color: 'purple',
    },
    {
      title: 'Average Sentiment',
      value: stats.averageSentiment.toFixed(1),
      icon: TrendingUp,
      color: 'green',
    },
    {
      title: 'Locations Mentioned',
      value: stats.totalLocations,
      icon: MapPin,
      color: 'blue',
    },
    {
      title: 'Food References',
      value: stats.totalFoodMentions,
      icon: Utensils,
      color: 'pink',
    },
  ];

  return (
    <>
      {summaryCards.map((card, index) => (
        <div
          key={index}
          className="bg-black/40 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <card.icon className={`h-8 w-8 text-${card.color}-500`} />
            <span className="text-2xl font-bold text-white">{card.value}</span>
          </div>
          <h3 className="text-gray-400 text-sm">{card.title}</h3>
        </div>
      ))}
    </>
  );
};