import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (

<div class="login">
  <div class="form">
    <form class="login-form" onSubmit={handleSubmit}>
      <span class="material-icons">login</span>
      <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
      <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
      <button type="submit"  disabled={isFetching}>login</button>
      <Link className="link" to="/register">
          Register
        </Link>
    </form>  
  </div>
</div>




  );
}
