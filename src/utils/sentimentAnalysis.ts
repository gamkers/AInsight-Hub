import { Post } from '../types/post';

export const SENTIMENT_THRESHOLD = 7; // Scores >= 7 are considered positive

export const analyzeSentiment = (posts: Post[]) => {
  const positive = posts.filter(post => post.score >= SENTIMENT_THRESHOLD).length;
  const negative = posts.filter(post => post.score < SENTIMENT_THRESHOLD).length;
  const averageSentiment = posts.reduce((acc, post) => acc + post.score, 0) / posts.length;

  return {
    positive,
    negative,
    averageSentiment,
    totalPosts: posts.length,
    positivePercentage: (positive / posts.length) * 100,
    negativePercentage: (negative / posts.length) * 100,
  };
};