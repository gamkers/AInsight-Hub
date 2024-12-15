import React from 'react';
import { Brain, Cpu, Network, Bot } from 'lucide-react';

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 animate-float-1">
        <Brain className="w-12 h-12 text-purple-500/30" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float-2">
        <Cpu className="w-10 h-10 text-blue-500/30" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-3">
        <Network className="w-14 h-14 text-emerald-500/30" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float-4">
        <Bot className="w-16 h-16 text-pink-500/30" />
      </div>
    </div>
  );
};