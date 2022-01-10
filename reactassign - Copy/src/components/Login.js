import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationData } from "../redux/action/actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = {
    email: "",
    password: "",
  };
  const [loginUser, setLoginUser] = useState(state);
  // const [registeredData, setRegisteredData] = useState([]);

  
  useEffect(() => {
    // axios
    //   .get("http://localhost:3005/users/")
    //   .then((resp) => {
    //     console.log(resp.data);
    //     setRegisteredData(resp.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    dispatch(getRegistrationData())
  }, []);

    const registeredData = useSelector((data)=> data.users.users)


  

    const onInputChange = (event) => {
      const { name, value } = event.target;
      setLoginUser({ ...loginUser, [name]: value });
    };

  // login the user
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginUserCheck = registeredData
    .filter((data) => data.email === loginUser.email && data.password === loginUser.password)
    .map((data) => data.email);
    if (loginUserCheck[0]) {
      localStorage.setItem("isAuthenticated", "true");
      history.push("/dashboard");
    } else {
      alert("user not Found");
      // alert(loginUser.email +  "  user not found")
    }
  };


  return (
    <>
      <div class="container">
        <div class="wrapper">
          <div class="title">
            <span>Login Form</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="row">
              <i class="fas fa-user"></i>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={onInputChange}
                autoComplete="new-email"
                required
              />
            </div>
            <div class="row">
              <i class="fas fa-lock"></i>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={onInputChange}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="row button">
              <input type="submit" value="Login" onSubmit={handleSubmit} />
            </div>
            <span> OR </span>
            <Link to="/signup">
              <div class="signup-link">
                <a href="#">Signup now</a>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

