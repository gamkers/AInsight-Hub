import { Post } from '../types/post';

interface LocationData {
  name: string;
  count: number;
  image?: string;
}

interface FoodData {
  name: string;
  count: number;
}

export const getTopPlaces = (posts: Post[], limit = 6): LocationData[] => {
  const locations: Record<string, LocationData> = {};
  
  posts.forEach(post => {
    post.keywords.places?.forEach(place => {
      if (!locations[place]) {
        locations[place] = {
          name: place,
          count: 1,
          image: post.image
        };
      } else {
        locations[place].count++;
      }
    });
  });

  return Object.values(locations)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};

export const getTopFoods = (posts: Post[], limit = 6): FoodData[] => {
  const foods: Record<string, FoodData> = {};
  
  posts.forEach(post => {
    post.keywords.food?.forEach(food => {
      if (!foods[food]) {
        foods[food] = {
          name: food,
          count: 1
        };
      } else {
        foods[food].count++;
      }
    });
  });

  return Object.values(foods)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};