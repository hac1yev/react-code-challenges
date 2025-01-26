import PropTypes from "prop-types";

const SearchParams = ({ handleNext, handlePrev, coins }) => {
    return (
        <>
            <h2 style={{ margin: '10px 0 30px 0' }}>Cryptocurrency Lists</h2>
            <div className="flex-center" style={{ flexWrap: 'wrap', gap: '15px' }}>
                {coins.map((coin) => (
                    <div 
                        key={coin.uuid} 
                        className="flex-between" 
                        style={{ background: '#fff', width: '250px', height: '80px', padding: '0 10px', gap: '10px' }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            flexShrink: 0,
                        }}>
                            <img src={coin.iconUrl} style={{ width: '100%', height: '100%' }} alt="" />
                        </div>
                        <span style={{ color: '#000' }}>{coin.name}</span>
                    </div>
                ))}
            </div>
            <div style={{ margin: '20px 0', gap: '15px' }} className="flex-center">
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
};

SearchParams.propTypes = {
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
    coins: PropTypes.array.isRequired
}

export default SearchParams;