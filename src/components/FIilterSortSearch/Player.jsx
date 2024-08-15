import PropTypes from 'prop-types';
import { memo } from 'react';

const Player = ({ player }) => {
    console.log("PLAYER", player);
    
    return (
        <li>{player}</li>
    );
};

const MemoizedPlayer = memo(Player);

Player.propTypes = {
    player: PropTypes.string.isRequired
};

export default MemoizedPlayer;