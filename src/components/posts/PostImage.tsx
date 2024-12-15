import React from 'react';

interface PostImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const PostImage: React.FC<PostImageProps> = ({ src, alt = 'Post image', className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
};