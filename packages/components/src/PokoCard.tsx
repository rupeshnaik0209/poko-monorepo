import React from "react";

interface PokoCardProps {
  pokeMon: any;
}

const PokoCard: React.FC<PokoCardProps> = ({ pokeMon }) => {
  return (
    <div>
      <h1>Name: {pokeMon.name.toUpperCase()}</h1>
    </div>
  );
};

export default PokoCard;
