import { useState } from "react";
import AddMemoForm from "./AddMemoForm";
import MemoList from "./MemoList";
import TotalPrice from "./TotalPrice";
import uniqid from 'uniqid';

const MemoizationWrap = () => {
    const [products,setProducts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const product = {
            id: uniqid(),
            title: formData.get("title"),
            price: formData.get("price"),
        };

        setProducts(prev => {
            return [
                ...prev,
                product
            ]
        });
    };    

    console.log("MEMO WRAP");
    
    return (
        <div style={{ width: '30%' }}>
            <h2>Product count: {products.length}</h2>
            <AddMemoForm handleSubmit={handleSubmit} />
            <TotalPrice products={products} />
            <MemoList products={products} setProducts={setProducts} />
        </div>
    );
};

export default MemoizationWrap;