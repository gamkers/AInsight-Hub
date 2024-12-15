import React from 'react';
import { Utensils } from 'lucide-react';
import { FoodCard } from './FoodCard';
import { POPULAR_FOODS } from '../../../config/constants';

export const PopularFoods = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white flex items-center space-x-2">
        <Utensils className="h-6 w-6 text-blue-500" />
        <span>Popular Foods</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POPULAR_FOODS.map((food) => (
          <FoodCard
            key={food.name}
            name={food.name}
            image={food.image}
            description={food.description}
          />
        ))}
      </div>
    </div>
  );
};