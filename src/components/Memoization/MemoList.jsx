import { memo, useCallback } from "react";
import MemoItem from "./MemoItem";
import PropTypes from 'prop-types';

const MemoList = ({ products, setProducts }) => {
    console.log("MEMO LIST");

    const handleDelete = useCallback((id) => {
        setProducts((prev) => {
            const filteredProducts = prev.filter((product) => product.id !== id);

            return filteredProducts;
        });        
    }, [setProducts]);

    return (
        <ul className="mt-2">
            {products.map((product) => (
                <MemoItem handleDelete={handleDelete} id={product.id} key={product.id} product={product} />
            ))}
        </ul>
    );
};

const MemoizedMemoList = memo(MemoList);

MemoList.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
};

export default MemoizedMemoList;