import React from 'react';
import { PopularPlaces } from './places/PopularPlaces';
import { PopularFoods } from './foods/PopularFoods';

export const PlacesAndFoods = () => {
  return (
    <div className="space-y-12">
      <PopularPlaces />
      <PopularFoods />
    </div>
  );
};