import React from "react";
import  CardGrid  from "./cardGrid/CardGrid";
import  cardGridData  from "./data/cardGridData.json";

export const ContentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardGridData && cardGridData.map((card, index) => (
        <CardGrid 
          key={index}
          title={card.title}
          text={card.text}
          image={card.image}
        />
      ))}
    </div>
  );
};
