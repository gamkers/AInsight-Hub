export interface Post {
  sentiment: string;
  score: number;
  justification: string;
  image?: string;
  keywords: {
    places?: string[];
    food?: string[];
  };
  post: string;
}