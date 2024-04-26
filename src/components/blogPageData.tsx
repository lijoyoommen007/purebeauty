import React from 'react';

interface CardProps {
  media?: {
    guid?: {
      rendered?: string;
    };
  };
  content: {
    rendered: string;
  };
}

function BlogPageData({ card }: { card: CardProps }) {
  return (
    <div className="flex flex-col px-16 mt-16 w-full text-sm font-light text-pink-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={card?.media?.guid?.rendered} // Use src instead of srcSet for a single image
        className="w-full h-auto max-md:max-w-full"
        alt="Blog Image" // Add alt text for accessibility
      />
      <div dangerouslySetInnerHTML={{ __html: card?.content?.rendered }} />
    </div>
  );
}

export default BlogPageData;
