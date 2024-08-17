import useFormValidation from "../../hooks/useFormValidation";

const initialValues = {
  fullName: "",
  username: "",
  email: "",
  password: "",
};

const CustomForm = () => {
  const handleFormSubmit = () => {
    console.log(values);
  };

  const { handleSubmit,handleChange,handleBlur,errors,values } = useFormValidation(initialValues,handleFormSubmit);

  return (
    <form className="mt-4 w-25" onSubmit={handleSubmit}>
      <div className="mb-1">
        <label htmlFor="fullName">Fullname</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="form-control"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your fullname: "
        />
      </div>
      {errors?.fullName && <p className="text-danger mb-1">{errors?.fullName}</p>}
      <div className="mb-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
          value={values?.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your username: "
        />
      </div>
      {errors?.username && <p className="text-danger mb-1">{errors?.username}</p>}
      <div className="mb-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your email: "
        />
      </div>
      {errors?.email && <p className="text-danger mb-1">{errors?.email}</p>}
      <div className="mb-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          value={values?.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password: "
        />
      </div>
      {errors?.password && <p className="text-danger mb-1">{errors?.password}</p>}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CustomForm;
