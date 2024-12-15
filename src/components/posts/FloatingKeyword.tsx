import React from 'react';

interface FloatingKeywordProps {
  text: string;
  type: 'place' | 'food';
  index: number;
}

export const FloatingKeyword: React.FC<FloatingKeywordProps> = ({ text, type, index }) => {
  const baseClasses = type === 'place' 
    ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' 
    : 'bg-blue-500/10 text-blue-300 border-blue-500/20';

  const animationDelay = `${(index % 4) * 0.5}s`;
  
  return (
    <div
      className={`absolute px-3 py-1.5 rounded-full border ${baseClasses} animate-float-${(index % 4) + 1}`}
      style={{
        left: `${20 + (index % 3) * 30}%`,
        top: `${10 + (index % 4) * 20}%`,
        animationDelay,
      }}
    >
      {text}
    </div>
  );
};