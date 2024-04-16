import React from 'react';
import { products } from '../constants/shopData';

interface Product {
  id: number;
  desc: string;
  name: string;
  price: string;
  imageUrl: string;
}

const ShopItemCard: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center"> 
      {products.map((product: Product) => (
        <div key={product.id} style={{ height: "45%" }} className="w-full md:w-1/2 flex overflow-hidden relative flex-col items-start font-medium text-pink-900 border border-customRed rounded-none">
          <img
            loading="lazy"
            srcSet={product.imageUrl}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            alt={product.name}
          />
          <div className="absolute bottom-0 left-0 pl-16 p-4 font-mono transform transition-transform duration-300 hover:scale-110">
            <div className="text-base mt-4">{product.desc}</div>
            <div className="text-lg mt-4">{product.name}</div>
            <div className="text-base mt-4 mb-5">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopItemCard;
