import React from "react";
import PlayingCard from "./PlayingCard";
import { useAxios } from "./hooks.js"
import "./PlayingCardList.css";

function CardTable() {
    const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

    return(
        <div className="PlayingCardList">
            <h3>Pick a card, any card!</h3>
            <div>
                <button onClick={() => addCard()}>Add a playing Card!</button>
            </div>
            <div className="PlayingCardList-card-area">
                {cards.map(cardData => (
                    <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
                ))}
            </div>
        </div>
    );
}

// CardTable.defaultProps = {};

export default CardTable;