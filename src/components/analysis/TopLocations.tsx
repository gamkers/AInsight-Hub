import React from 'react';
import { MapPin } from 'lucide-react';
import { posts } from '../../data/posts';

const getTopLocations = () => {
  const locations: Record<string, number> = {};
  
  posts.forEach(post => {
    post.keywords.places?.forEach(place => {
      locations[place] = (locations[place] || 0) + 1;
    });
  });

  return Object.entries(locations)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
};

export const TopLocations = () => {
  const topLocations = getTopLocations();

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 mt-8">
      <h3 className="text-xl font-semibold mb-6 text-white">Top Mentioned Locations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topLocations.map(([location, count]) => (
          <div
            key={location}
            className="flex items-center space-x-3 p-4 rounded-lg bg-purple-500/5 border border-purple-500/10 transform hover:scale-105 transition-all duration-300"
          >
            <MapPin className="h-5 w-5 text-purple-500" />
            <div>
              <div className="text-sm font-medium text-white">{location}</div>
              <div className="text-xs text-gray-400">{count} mentions</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};