import React, { useEffect } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationData } from "../redux/action/actions";
import { Link, useHistory, useParams } from "react-router-dom";
import { height } from "@mui/system";
const Profile = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getRegistrationData());
  }, []);

  const userData = useSelector((data) => data.users.users);
  return (
    <div>
      <header class="admin__header">
        <a href="#" class="logo">
          <h1>Dashboard</h1>
        </a>
        <div class="toolbar">
          <button
            class="profile-edit-btn"
            onClick={() => history.push("/dashboard")}
          >
            Back
          </button>
        </div>
      </header>

      <div class="container emp-profile">
        {/* {userData
        .filter((user) => user)
        .map((user)=>( */}
            <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div class="file btn btn-lg btn-primary">Profile</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>Nikhil Jikar</h5>
                  <h6>Web Developer</h6>
                  <p class="proile-rating">
                    Profile : <span>React Developer</span>
                  </p>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    {/* <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                {/* <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/> */}
                {/* <button
                  class="profile-edit-btn"
                  onClick={() => history.push("/dashboard")}
                >
                  Back
                </button> */}
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work">
                  <p>WORK LINK</p>
                  <a href="">Website Link</a>
                  <br />
                  <a href="">Bootsnipp Profile</a>
                  <br />
                  <a href="">Bootply Profile</a>
                  <p>SKILLS</p>
                  <a href="">Web Designer</a>
                  <br />
                  <a href="">Web Developer</a>
                  <br />
                  <a href="">WordPress</a>
                  <br />
                  <a href="">WooCommerce</a>
                  <br />
                  <a href="">PHP, .Net</a>
                  <br />
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>Nikhil123</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>Nikhil Jikar</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>nikhil@gmail.com</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>123 456 7890</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div class="col-md-6">
                        <p>React Developer</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div class="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div class="col-md-6">
                        <p>2</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div class="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

   {/* ))}  */}
      </div>
    </div>
  );
};

export default Profile;
