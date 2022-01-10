import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import TaskListTable from "./TaskListTable";
import "./indidash.css";
import TaskView from "./TaskView";

const IndiDashboard = ({ history }) => {
  const { id, project } = useParams()
  const [indiproject, setIndiproject] = useState([]);
  const [filter, setFilter] = useState("Filter");

  const getProject = () => {
    axios
      .get("http://localhost:3005/projects/")
      .then((resp) => {
        console.log(resp.data);
        setIndiproject(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => getProject(), []);

  const parent=(name)=>{
      alert("Hello wrold",name)
  }

  return (
    <>
    <div className="main_container">
      <header class="admin__header">
            <a href="#" class="logo">
              <h1>Dashboard</h1>
            </a>
            <div class="toolbar">              
            </div>
          </header>

      {indiproject
      .filter((indiP) => indiP.id == id)
        .map((indiP) => (
          <div className="pro_container">
            <div className="pro_head">
              {/* <h1>Svelte</h1> */}
              <div>
              <button onClick={() => history.push("/dashboard")} className="back_btn">back</button>
              </div>
              <div >
              <Link to={`/indidashboard/${indiP.id}/${indiP.project}/edittask`}>
                <button className="back_btn">Task-Details</button>
              </Link>
              </div>
            </div>
            <div className="pro_data">
              <h2>Project Name : {indiP.project}</h2>
              <h3>
                Project-Members :{""}
                {indiP.selectMember !== undefined
                  ? indiP.selectMember.join(", ")
                  : ""}
              </h3>
              {/* <h3>Technology: Svelte</h3> */}
            </div>

            <div className="pro_body">
              <p>Status: {indiP.status}</p>
            </div>

            <div className="pro_requirement">
              Requirements: {indiP.requirement}
            </div>

            <div className="pro_dates">
              <h4>Start Date -{indiP.startDate}</h4>
              <h4>End Date - {indiP.endDate}</h4>
              {/* <Link to={`/indidashboard/${indiP.id}/${indiP.project}/edittask`}>
                <button>Task Details</button>
              </Link> */}
            </div>
          </div>
        ))}

     
      
      <hr />
      {/* <TaskView /> */}
    </div>
    </>
  );
};

export default IndiDashboard;
