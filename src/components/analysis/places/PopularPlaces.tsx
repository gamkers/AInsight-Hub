import React from 'react';
import { MapPin } from 'lucide-react';
import { PlaceCard } from './PlaceCard';
import { POPULAR_PLACES } from '../../../config/constants';

export const PopularPlaces = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white flex items-center space-x-2">
        <MapPin className="h-6 w-6 text-purple-500" />
        <span>Popular Places</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POPULAR_PLACES.map((place) => (
          <PlaceCard
            key={place.name}
            name={place.name}
            image={place.image}
            description={place.description}
          />
        ))}
      </div>
    </div>
  );
};