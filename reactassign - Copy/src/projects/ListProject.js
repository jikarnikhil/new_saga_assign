import React, { useEffect, useState } from "react";
import "./project.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProject = () => {
  const [project, setProject] = useState([]);

  const getProject = () => {
    axios
      .get("http://localhost:3005/projects/")
      .then((resp) => {
        console.log(resp.data);
        setProject(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => getProject(), []);

  return (
    <>
      <div className="project_container">
        <Link to="/addproject">
          <div className="card1">
            <div className="card1_btn">
              <img src="https://img.icons8.com/ios/50/000000/add--v1.png" />
              <span style={{color:"black"}}>Add Project</span>
            </div>
          </div>
        </Link>

        {project
        .filter(str => str.mentor.includes(str.mentor))
        .map((p) => (
          <Link to={`/indidashboard/${p.id}/${p.project}`}>
          <div className="card" style={{color:"black"}}>
            <div className="card_header">
              <small className="card_status">{p.status}</small>
              <h3>{p.project}</h3>
            </div>
            <p>Mentor: {p.mentor}</p>
            <p>
              Members::{""}
              {p.selectMember !== undefined
                ? p.selectMember.join(", ")
                : ""}
            </p>
            <div>
              <p className="date">Start Date: {p.startDate}</p>
              <p className="date">End Date: {p.endDate}</p>
              {/* <p className="date">{p.id}</p> */}
            </div>
            
            {/* <div className="card_btn">
              <button><h6>Details</h6></button>
            </div> */}
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListProject;
