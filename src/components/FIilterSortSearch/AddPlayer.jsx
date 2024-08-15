import PropTypes from 'prop-types';
import { memo } from 'react';

const AddPlayer = ({ handleAdd,handleChange,addText }) => {
    console.log("ADD PLAYER");

    return (
        <form onSubmit={handleAdd}>
            <input value={addText} onChange={handleChange} type="text" placeholder="Add player: " />
            <button>Add</button>
        </form>
    );
};

const MemoizedAddPlayer = memo(AddPlayer);

AddPlayer.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    addText: PropTypes.string.isRequired,
};

export default MemoizedAddPlayer;