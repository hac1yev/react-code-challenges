import { useState, useReducer } from 'react';


const validate = (user) => {
  const { username,email,password } = user;
  let errors = {}; 

  if(!username) {
    errors.username = "Username is required!"; 
  }else if(!email) {
    errors.email = "Email is required!"; 
  }else if(!password){
    errors.password = "Password is required!";
  }

  if(username.length < 6) {
      errors.username = "Characters should be at least 6 length!";
  }else{
      errors.username = "";
  }

  if(password.length < 6) {
      errors.password = "Characters should be at least 6 length!";
  }else{
      errors.password = "";
  }

  if(!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
  }else{
      errors.email = "";
  } 

  return errors;
};

const initialState = {
  userInfo: {},
};

const reducer = (state,action) => {
  switch(action.type) {
    case "username":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          username: action.payload
        }
      };
    case "email":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          email: action.payload
        }
      };
    case "password":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          password: action.payload
        }
      };
    default:
      return state;
  }
};

const useFormContext = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [errors,setErrors] = useState({});

  const handleChange = (e) => {
    const { name,value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const errors = validate(state.userInfo);
      setErrors(errors);
      setIsSubmitting(false);
    },2000);
  }

  return {
    errors,
    values: state.userInfo,
    isSubmitting,
    handleChange,
    handleSubmit,
  }

};


const AdvancedFormValidation = () => {
 const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormContext();    

  return (
    <form className="mt-4 w-25" onSubmit={handleSubmit}>
      <div className="mb-1">
        <label>Username:</label>
        <input
          className='form-control'
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>
      {errors.username && <p className='text-danger mb-1'>{errors.username}</p>}
      <div className="mb-1">
        <label>Email:</label>
        <input
          className='form-control'
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && <p className='text-danger mb-1'>{errors.email}</p>}
      <div className="mb-1">
        <label>Password:</label>
        <input
          className='form-control'
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      {errors.password && <p className='text-danger mb-1'>{errors.password}</p>}
      <button disabled={isSubmitting} className='btn btn-primary mt-2' type="submit" >
        Submit
      </button>
    </form>
  );
};

export default AdvancedFormValidation;