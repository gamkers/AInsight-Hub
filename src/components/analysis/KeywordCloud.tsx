import React from 'react';
import { posts } from '../../data/posts';

const getKeywordFrequency = () => {
  const keywords: Record<string, number> = {};
  
  posts.forEach(post => {
    [...(post.keywords.places || []), ...(post.keywords.food || [])].forEach(keyword => {
      keywords[keyword] = (keywords[keyword] || 0) + 1;
    });
  });

  return Object.entries(keywords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12); // Limit to top 12 keywords
};

export const KeywordCloud = () => {
  const keywords = getKeywordFrequency();
  const maxFrequency = Math.max(...keywords.map(([_, freq]) => freq));

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white">Popular Keywords</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {keywords.map(([keyword, frequency]) => {
          const size = 0.8 + (frequency / maxFrequency) * 0.4; // Reduced size variation
          const isPlace = posts.some(post => post.keywords.places?.includes(keyword));
          
          return (
            <span
              key={keyword}
              className={`inline-block px-3 py-1.5 rounded-full ${
                isPlace ? 'bg-purple-500/10 text-purple-300' : 'bg-blue-500/10 text-blue-300'
              } border ${
                isPlace ? 'border-purple-500/20' : 'border-blue-500/20'
              } transition-transform duration-300 hover:scale-110 cursor-pointer whitespace-nowrap`}
              style={{
                fontSize: `${size}rem`,
              }}
            >
              {keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
};