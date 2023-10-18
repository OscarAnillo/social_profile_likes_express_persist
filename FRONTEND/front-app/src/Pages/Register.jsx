import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    occupation: "",
    location: "",
    description: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };
  const {
    firstName,
    lastName,
    email,
    password,
    occupation,
    location,
    description,
  } = userInput;

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !occupation ||
      !location ||
      !description
    ) {
      return alert("Please provide all the required data!");
    }
    axios
      .post("http://localhost:3005/auth/register", {
        firstName,
        lastName,
        email,
        password,
        occupation,
        location,
        description,
      })
      .then(() => {
        alert("Succesful Registration");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="div-reg">
      <div className="div-reg-container">
        <h1>Register</h1>
        <form className="reg-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={changeHandler}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Occupation"
            name="occupation"
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={changeHandler}
          />
          <button>Register</button>
        </form>
      </div>
      <p className="bottom-text">
        Already have an account <Link to="/">Login Here</Link>
      </p>
    </div>
  );
};
