import * as React from "react";
import { cardData } from "../constants/blogData";
import { ImageFirstCard, ProductFirstCard } from "./imageComponent";

interface Card {
  id: number; 
  imgSrc: string;
  product: string;
  alter?: boolean;
}

function ItemCard() {
  return (
    <div className="flex flex-wrap justify-evenly">
      {cardData.map((card:Card) => (
        <div key={card.id.toString()} className="w-[100%] md:w-[50%]">
          {card.alter ? (  
            <ImageFirstCard card={card} />
          ) : (
            <ProductFirstCard card={card} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
