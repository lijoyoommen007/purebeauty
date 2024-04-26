import React from 'react';
import Link from 'next/link';

interface CardProps {
  media: any;
  title: any;
  id: number;
  product: string;
}

export function ImageFirstCard({ card }: { card: CardProps }) {
  
  return (
    <Link className='h-full' href={`/${card.id}`}>
    <div className="flex max-md:flex-col max-md:gap-0 h-full">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full h-full relative overflow-hidden">
        <img
          loading="lazy"
          srcSet={card?.media?.guid?.rendered}
          alt="product"
          className="w-full h-full object-cover transition-transform transform-gpu hover:scale-110"
        />
      </div>

      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start pt-24 pr-20 pb-12 pl-10 w-full text-orange-100 bg-customRed max-md:px-5  hover:bg-pink-900 h-full">
            <div className="mt-28 text-sm font-light uppercase max-md:mt-10">PRODUCT</div>
            <div className="mt-8 text-3xl leading-10 w-[258px] font-serif hover:scale-105 transition-transform cursor-pointer">{card.title.rendered}</div>
          </div>
      </div>
    </div>
    </Link>

  );
}

export function ProductFirstCard({ card }: { card: CardProps }) {  
  return (
    <Link className='h-full' href={`/${card.id}`}>

    <div className="flex max-md:flex-col max-md:gap-0 h-full">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full h-full">
          <div className="flex flex-col items-start pt-24 pr-20 pb-12 pl-10 w-full text-orange-100 bg-customRed max-md:px-5  hover:bg-pink-900 h-full">
            <div className="mt-28 text-sm font-light uppercase max-md:mt-10">PRODUCT</div>
            <div className="mt-8 text-3xl leading-10 w-[258px] font-serif hover:scale-105 transition-transform cursor-pointer">{card.title.rendered}</div>
          </div>
      </div>
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full relative overflow-hidden h-full">
        <img
          loading="lazy"
          srcSet={card?.media?.source_url}
          alt="product"
          className="w-full h-full object-cover transition-transform transform-gpu hover:scale-110"
        />
      </div>
    </div>
    </Link>

  );
}
