import React, { useState, useEffect } from "react";
import "./addproject.css";
import axios from "axios";
import MultiSelect from "multiselect-react-dropdown";
import { useParams } from "react-router";
import { postProject } from "../redux/action/actions";
import { useDispatch, useSelector } from "react-redux";

const AddProjects = ({ history }) => {
  const dispatch = useDispatch();
  const [member, setMember] = useState(["aman", "vishal", "vikram", "tony"]);
  const [data, setData] = useState({
    project: "",
    mentor: "",
    selectMember: [],
    startDate: "",
    endDate: "",
    requirement: "",
    status: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:3005/projects", {
    //     project: data.project,
    //     mentor: data.mentor,
    //     selectMember: data.selectMember,
    //     startDate: data.startDate,
    //     endDate: data.endDate,
    //     requirement: data.requirement,
    //     status: data.status,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });

    // setData({
    //   project: "",
    //   mentor: "",
    //   selectMember: [],
    //   startDate: "",
    //   endDate: "",
    //   requirement: "",
    //   status: "",
    // });

    dispatch(postProject(data));
    history.push("/dashboard")
  };

  return (
    <>
      <header class="admin__header">
        <a href="#" class="logo">
          <h1>Dashboard</h1>
        </a>
        <div class="toolbar">
          {/* <div class="toolbar__left">
              <button class="btn btn--primary">Add content</button>
            </div> */}
          <div class="toolbar__right">
            <button type="submit" id="submit" onClick={() => history.push("/dashboard")}>
              Back
            </button>
          </div>
        </div>
      </header>
      <div className="container">
        {/* <div className="form-input">
          <button type="submit" id="submit" onClick={() => history.push("/")}>
            Back
          </button>
        </div> */}

        <form id="survey-form" onSubmit={(e) => submit(e)}>
          {/* <div className='form-input'>
               <label id='name-label'>Project Name</label>
               <input type='text' placeholder='Project Name' className='form-input-size' 
               required 
               name="name"
               onChange={e=>handle(e)}
               value={data.name}
               />
           </div> */}

          <div className="form-input">
            <label id="name-label">Project Name</label>
            <input
              type="text"
              placeholder="Project Name"
              className="form-input-size"
              required
              name="project"
              onChange={(e) => handle(e)}
              value={data.project || ""}
            />
          </div>
          <div className="form-input">
            <label id="mentor-label">Mentor Name</label>
            <input
              type="text"
              placeholder="mentor name"
              className="form-input-size"
              required
              name="mentor"
              onChange={(e) => handle(e)}
              value={data.mentor || ""}
            />
          </div>

          <div className="form-input">
            <label id="email-label">Select Members</label>
            <MultiSelect
              className="mul_select"
              // showCheckbox
              isObject={false}
              closeOnSelect={false}
              onRemove={(e) => {
                setData({ ...data, selectMember: e });
              }}
              onSelect={(e) => {
                setData({ ...data, selectMember: e });
              }}
              options={member}
              selectedValues={data.selectMember || ""}
            />
            {/* <input
            type="text"
            placeholder="Enter Members Name"
            className="form-input-size"
            required
            name="selectMember"
            onChange={(e) => handle(e)}
            value={data.selectMember}
          /> */}
          </div>

          <div className="date-input">
            <span id="email-label">Start Date</span>
            <input
              type="date"
              placeholder="Start Date"
              className="form-input-size"
              required
              name="startDate"
              onChange={(e) => handle(e)}
              value={data.startDate || ""}
            />

            <span id="email-label">End Date</span>
            <input
              type="date"
              placeholder="End Date"
              className="form-input-size"
              required
              name="endDate"
              onChange={(e) => handle(e)}
              value={data.endDate || ""}
            />
          </div>

          <div className="form-input">
            <label id="require-label">Requirement and Timeline</label>
            <textarea
              type="text"
              placeholder="Enter Requirement and Timeline..."
              name="requirement"
              onChange={(e) => handle(e)}
              value={data.requirement || ""}
            ></textarea>
          </div>

          <div className="form-input">
            <label id="status-label">Select Project Satus</label>
            <select
              id="dropdown"
              className="form-input-size"
              required
              name="status"
              onChange={(e) => handle(e)}
              value={data.status || ""}
            >
              <option disabled selected value="">
                Select Status
              </option>
              <option value="complete">Completed</option>
              <option value="ongoing">On Going</option>
              <option value="notcompleted">Not Completed</option>
              <option value="onhold">On Hold</option>
            </select>
          </div>

          <div className="form-input">
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProjects;

