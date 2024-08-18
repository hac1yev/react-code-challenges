import PropTypes from 'prop-types';

const AddMemoForm = ({ handleSubmit }) => {
    console.log("ADD MEMO FORM");

    return (
        <form className="mt-4 d-flex align-items-center justify-content-center gap-2" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <select className="form-select" name='title' required aria-label="Default select example">
                    <option value="mercedes">Mercedes</option>
                    <option value="bmw">Bmw</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Enter price: "
                    required
                />
            </div>
            <button className="btn btn-primary align-self-end">Submit</button>
        </form>
    );
};

AddMemoForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default AddMemoForm;