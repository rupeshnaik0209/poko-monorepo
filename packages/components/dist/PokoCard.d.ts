import React from "react";
interface pokeMonType {
    name: string;
}
interface PokoCardProps {
    pokeMon: pokeMonType;
}
declare const PokoCard: React.FC<PokoCardProps>;
export default PokoCard;
