import { useForm } from "react-hook-form";
import "./Submission.css";

function SubmissionForm() {
    const { register,reset,handleSubmit,formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        reset();
    }

    const handleFileChange = (e) => {
        let file = e.target.files[0];

        if(file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                const img = reader.result;
                console.log(img);
            }
        }
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="firstname">
                            First Name*
                        </label>
                        <input
                            type="text"
                            {...register("firstname", {
                                required: true,
                                minLength: 6,
                            })}
                            name="firstname"
                            id="firstname"
                            placeholder="Enter First Name"
                        />
                        {errors["firstname"] && (
                            <p className="error">Please enter valid firstname!</p>
                        )}
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="lastname">Last Name*</label>
                        <input
                            type="text"
                            {...register("lastname", {
                                required: true,
                                minLength: 6,
                            })}
                            name="lastname"
                            id="lastname"
                            placeholder="Enter Last Name"
                        />
                        {errors["lastname"] && (
                            <p className="error">Please enter valid lastname!</p>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Enter Email* </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required", 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email address",
                                },
                            })}
                            name="email"
                            id="email"
                            placeholder="Enter email"
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="tel">Contact*</label>
                        <input
                            type="tel"
                            {...register("contact", {
                                required: true,
                            })}
                            name="contact"
                            id="contact"
                            placeholder="Enter Mobile number"
                        />
                        {errors["contact"] && (
                            <p className="error">Please enter valid contact!</p>
                        )}
                    </div>
                    <div className="flex-row" style={{ color: '#000' }}>
                        <label htmlFor="gender">Gender*</label>
                        <input
                            type="radio"
                            {...register("gender", {
                                required: true,
                            })}
                            name="gender"
                            value="male"
                            id="male"
                            checked={true}
                        />
                        Male
                        <input
                            type="radio"
                            {...register("gender", {
                                required: true,
                            })}
                            name="gender"
                            value="female"
                            id="female"
                            checked={true}
                        />
                        Female
                        <input
                            type="radio"
                            {...register("gender", {
                                required: true,
                            })}
                            name="gender"
                            value="other"
                            id="other"
                            checked={true}
                        />
                        Other
                        {errors["gender"] && (
                            <p className="error">Please enter valid gender!</p>
                        )}
                    </div>
                    <div className="flex-row" style={{ color: '#000' }}>
                        <label htmlFor="lang">
                            Your best Subject
                        </label>
                        <input
                            type="checkbox"
                            {...register("lang", {
                                required: true,
                            })}
                            name="lang"
                            id="english"
                            checked={false}
                        />
                        English
                        <input
                            type="checkbox"
                            {...register("lang", {
                                required: true,
                            })}
                            name="lang"
                            id="maths"
                            checked={false}
                        />
                        Maths
                        <input
                            type="checkbox"
                            {...register("lang", {
                                required: true,
                            })}
                            name="lang"
                            id="physics"
                            checked={false}
                        />
                        Physics
                        {errors["lang"] && (
                            <p className="error">Please enter valid lang!</p>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="file">Upload Resume*</label>
                        <input
                            type="file"
                            {...register("file", {
                                required: true,
                            })}
                            onChange={handleFileChange}
                            name="file"
                            id="file"
                            placeholder="Enter Upload File"
                        />
                        {errors["file"] && (
                            <p className="error">Please enter file!</p>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="url">Enter URL*</label>
                        <input
                            type="url"
                            {...register("url", {
                                required: true,
                            })}
                            name="url"
                            id="url"
                            placeholder="Enter url"
                        />
                        {errors["url"] && (
                            <p className="error">Please enter url!</p>
                        )}
                    </div>
                    <div className="input-group">
                        <label>Select your choice</label>
                        <select
                            {...register("ans", {
                                required: true,
                            })}
                            name="ans"
                            id="ans"
                        >
                            <option
                                value=""
                                disabled
                                selected
                            >
                                Select your Ans
                            </option>
                            <optgroup label="Beginers">
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">
                                    JavaScript
                                </option>
                            </optgroup>
                            <optgroup label="Advance">
                                <option value="4">React</option>
                                <option value="5">Node</option>
                                <option value="6">
                                    Express
                                </option>
                                <option value="t">
                                    MongoDB
                                </option>
                            </optgroup>
                        </select>
                        {errors["select"] && (
                            <p className="error">Please select Ans!</p>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">About</label>
                        <textarea
                            {...register("description", {
                                required: true,
                            })}
                            name="description"
                            id="description"
                            cols="30"
                            rows="10"
                            placeholder="About your self"
                        ></textarea>
                        {errors["about"] && (
                            <p className="error">Please enter description!</p>
                        )}
                    </div>
                    <div className="buttons-wrapper">
                        <button
                            type="reset"
                            value="reset"
                            // onClick={() => handleReset()}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            value="Submit"
                            // onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}

export default SubmissionForm;