import React, { useEffect, useState } from 'react';
import { getProducts } from "../api/producsApi"
interface Product {
  short_description: string | TrustedHTML;
  id: number;
  desc: string;
  name: string;
  price: string;
  images: any;
  src: any;
  description: string; // Assuming you have a description field in your Product interface
}

const ShopItemCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product: Product) => (
        <div
          key={product.id}
          style={{ height: "45%" }}
          className="w-full md:w-1/2 flex overflow-hidden relative flex-col items-start font-medium text-pink-900 border border-customRed rounded-none"
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <img
            loading="lazy"
            srcSet={product.images[0].src}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            alt={product.name}
          />
          <div className="absolute bottom-0 left-0 pl-14 p-4 font-mono transform transition-transform duration-300 hover:scale-105">
            <div
              className="text-base mt-4"
              dangerouslySetInnerHTML={{ __html: hoveredProductId === product.id ? product.description : product.short_description }}
            />
            <div className="text-lg mt-4">{product.name}</div>
            <div className="text-base mt-4 mb-5">${product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopItemCard;
