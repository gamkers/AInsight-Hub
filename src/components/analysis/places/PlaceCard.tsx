import React from 'react';
import { MapPin } from 'lucide-react';

interface PlaceCardProps {
  name: string;
  image: string;
  description: string;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ name, image, description }) => (
  <div className="relative group overflow-hidden rounded-xl">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
      <div className="absolute bottom-0 p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-purple-400" />
            <h4 className="text-white font-medium">{name}</h4>
          </div>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  </div>
);