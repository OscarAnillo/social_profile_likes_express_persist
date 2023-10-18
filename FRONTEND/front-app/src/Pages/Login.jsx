import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../Redux/Features/user-slice";

export const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.password) {
      return alert("Please provide all the required data");
    }
    axios
      .post("http://localhost:3005/auth/login", {
        email: userInput.email,
        password: userInput.password,
      })
      .then((res) => {
        //console.log(res.data);
        dispatch(setUser(res.data));
        localStorage.setItem("userId", res.data._id);
        navigate("/home");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="div-login">
      <div className="div-login-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            type="text"
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
          <button>Login</button>
        </form>
      </div>
      <p className="bottom-text">
        Dont have an account <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
};
