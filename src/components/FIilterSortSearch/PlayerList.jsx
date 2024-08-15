import PropTypes from 'prop-types';
import Player from './Player';
import { memo } from 'react';

const PlayerList = ({ players }) => {
    console.log("PLAYER LIST");

    return (
        <ul>
            {players.map((player,index) => (
                <Player key={index} player={player} />
            ))}
        </ul>
    );
};

const MemoizedPlayerList = memo(PlayerList);

PlayerList.propTypes = {
    players: PropTypes.array.isRequired,
    query: PropTypes.string
};

export default MemoizedPlayerList;