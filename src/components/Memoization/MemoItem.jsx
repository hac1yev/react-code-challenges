import PropTypes from 'prop-types';
import { memo } from 'react';

const MemoItem = ({ product, handleDelete, id }) => {
    console.log("MEMO ITEM");

    return (
        <div onClick={() => handleDelete(id)}>
            {product?.title} {product?.price}$
        </div>
    );
};

const MemoizedMemoItem = memo(MemoItem); 

MemoItem.propTypes = {
    product: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default MemoizedMemoItem;