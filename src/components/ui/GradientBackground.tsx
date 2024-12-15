import React from 'react';

export const GradientBackground = () => {
  return (
    <div className="absolute inset-0 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
    </div>
  );
};