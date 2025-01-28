import PropTypes from "prop-types";

const Cards = ({ name, cardId, handleFlip, currentOpenedCards }) => {     
    return (
        <div 
            className={
                JSON.stringify(currentOpenedCards).includes(JSON.stringify({ name, id: cardId }))
                    ? "flex-center memory-game-card active-card"
                    : "flex-center memory-game-card"
            }
            onClick={handleFlip.bind(null, cardId)}
        >
            <span>{name}</span>
        </div>
    );
};

Cards.propTypes = {
    name: PropTypes.string.isRequired,
    cardId: PropTypes.string.isRequired,
    handleFlip: PropTypes.func.isRequired,
    currentOpenedCards: PropTypes.array.isRequired
};

export default Cards;