import PropTypes from 'prop-types';
import { useState } from 'react';

const TotalPrice = ({ products }) => {
    const [value,setValue] = useState("mercedes");

    const filteredValues = products.filter(product => product.title === value);
    
    let totalProductPrice = filteredValues.reduce((total,item) => {
        total += parseInt(item.price);
        return total;
    }, 0);

    console.log("TOTAL PRICE");
    

    return (
        <div className="d-flex align-items-center gap-3">
             <select className="form-select my-3" onChange={(e) => setValue(e.target.value)} aria-label="Default select example">
                <option value="mercedes">Mercedes</option>
                <option value="bmw">Bmw</option>
                <option value="audi">Audi</option>
            </select>
            <p className="mb-0" style={{ whiteSpace: 'nowrap' }}>Total price: {totalProductPrice}$</p>
        </div>
    );
};

TotalPrice.propTypes = {
    products: PropTypes.array.isRequired
};

export default TotalPrice;