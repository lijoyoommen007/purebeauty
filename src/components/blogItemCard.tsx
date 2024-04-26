// ItemCard.js

import * as React from "react";
import { ImageFirstCard, ProductFirstCard } from "./imageComponent";
import { useMergedData } from "../utils/utils"; // Import the utility function

interface Card {
  id: number;
  imgSrc: string;
  product: string;
  alter?: boolean;
}

function ItemCard() {
  const mergedData = useMergedData();

  return (
    <div className="flex flex-wrap justify-evenly">
      {mergedData.map((mergedItem: any, index: number) => {
        const componentToRender = index % 4 < 2 ? ProductFirstCard : ImageFirstCard;
        return (
          <div key={mergedItem.id.toString()} className="w-[100%] md:w-[50%]">
            {React.createElement(componentToRender, { card: mergedItem })}
          </div>
        );
      })}
    </div>
  );
}

export default ItemCard;
