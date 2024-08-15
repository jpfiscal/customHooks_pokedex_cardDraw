import React from "react";
import backOfCard from "./back.png";
import { useFlip } from "./hooks.js";
import "./PlayingCard.css"

function PlayingCard({front,back=backOfCard}){
    const [isFacingUp, setIsFacingUp] = useFlip(true);
    return(
        <img 
            src={isFacingUp ? front: back}
            alt="playing card"
            onClick={setIsFacingUp}
            className="PlayingCard Card"
        />
    );
}

export default PlayingCard;