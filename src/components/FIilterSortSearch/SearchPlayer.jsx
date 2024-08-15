import { memo } from "react";
import PropTypes from 'prop-types';

const SearchPlayer = ({ handleSearch }) => {
    console.log("SEARCH PLAYER");

    return (
        <div>
            <input onChange={handleSearch} type="text" placeholder="Search player: " className="mb-2" />
        </div>
    );
};

const MemoizedSearchPlayer = memo(SearchPlayer);

SearchPlayer.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default MemoizedSearchPlayer;