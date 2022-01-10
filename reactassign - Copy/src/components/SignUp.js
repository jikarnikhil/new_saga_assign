import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {registration} from '../redux/action/actions'
const SignUp = () => {
  const dispatch = useDispatch();
    const history = useHistory();
  const [user, setUser] = useState({
    type: "",
    name: "",
    email: "",
    password: "",
  });

  const handle = (e) => {
    
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
    // console.log(newdata)
  };

  const submit = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:3005/users", {
    //     type: user.type,
    //     name: user.name,
    //     email: user.email,
    //     password: user.password,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });

    dispatch(registration(user));
    setUser({
      type: "",
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>SignUp Here</span>
          </div>
          <form onSubmit={(e) => submit(e)}>
            <div className="row">
              <i class="fas fa-graduation-cap"></i>
              {/* <select name="type" id="type" value={user.type} onChange={(e) => handle(e)} style={{color: "rgb(149, 147, 147)"}}>
                <option value="">Select Type</option>
                <option value="mentor">Mentor</option>
                <option value="employee">Employee</option>
              </select> */}

              <select
                style={{color: "rgb(149, 147, 147)"}}
                className="form-input-size"
                required
                name="type"
                onChange={(e) => handle(e)}
                value={user.type || ""}
              >
                <option disabled selected value="">
                  Select Type
                </option>
                <option value="mentor">Mentor</option>
                <option value="employee">Employee</option>
              </select>
            </div>

            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                onChange={(e) => handle(e)}
                value={user.name}
              />
            </div>

            <div className="row">
              <i class="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email"
                required
                name="email"
                onChange={(e) => handle(e)}
                value={user.email}
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={(e) => handle(e)}
                value={user.password}
              />
            </div>

            <div className="row button">
              <input type="submit" value="SignUp" />
            </div>
            <span> OR </span>
            <Link to="/">
              <div className="signup-link">
                <a href="#">Login</a>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
