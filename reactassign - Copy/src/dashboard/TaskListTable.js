import React, { useState, useEffect } from "react";
import "./tasklisttable.css";
import TaskView from "./TaskView";
import axios from "axios";
import { useModal } from "react-hooks-use-modal";
import { postTask } from "../redux/action/actions";
import { useDispatch } from "react-redux";

const TaskListTable = (props) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    project: "",
    dura: "",
    finT: "",
    status: "",
    comment: "",
    reply: "",
    qa: "",
    quality: "",
    approve: "",
    developer: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(details);
    // axios
    //   .post("http://localhost:3005/mydt", {
    //     project: details.project,
    //     dura: details.dura,
    //     finT: details.finT,
    //     status: details.status,
    //     comment: details.comment,
    //     reply: details.reply,
    //     qa: details.qa,
    //     quality: details.quality,
    //     approve: details.approve,
    //     developer: details.developer,
    //     date: details.date,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });

      dispatch(postTask(details))
      window.location.reload();
  };

  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  return (
    <div className="form_container">
      {/* <p>Add Details? {isOpen ? "Yes" : "No"}</p> */}
      <button onClick={open} className="add_btn">
        Add Details
      </button>
      <Modal>
        <div className="container">
          <img
            className="close_icon"
            onClick={close}
            src="https://img.icons8.com/cotton/30/000000/delete-sign.png"
          />
          <form onSubmit={submit}>
            <div>
              <input
                type="text"
                placeholder="Enter Project Name"
                name="project"
                value={details.project}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Estimate duration"
                name="dura"
                value={details.dura}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Final Time"
                name="finT"
                value={details.finT}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <select
                id="dropdown"
                name="status"
                value={details.status}
                onChange={(e) => handleChange(e)}
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

            <div>
              <input
                type="text"
                placeholder="Comment"
                name="comment"
                value={details.comment}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Reply"
                name="reply"
                value={details.reply}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* <div>
              <input
                type="text"
                placeholder="QA"
                name="qa"
                value={details.qa}
                onChange={(e) => handleChange(e)}
              />
            </div> */}

        <div className="appr_radio" onChange={(e) => handleChange(e)}>
              <label>Quality Analysis :: </label>
              <br />
              <label>
                <input
                  className="radio"
                  name="qa"
                  type="radio"
                  value="yes"
                />
                Approve
              </label>
              <label>
                <input
                  className="radio"
                  name="qa"
                  type="radio"
                  value="no"
                />
                Not-Approve
              </label>
            </div>




            <div>
              <select
                id="dropdown"
                name="quality"
                onChange={(e) => handleChange(e)}
                value={details.quality || ""}
              >
                <option disabled selected value="">
                  Code quality
                </option>
                <option value="improve">Need Imrove</option>
                <option value="average">Average</option>
                <option value="good">Good</option>
                <option value="better">Better</option>
              </select>
            </div>

            <div className="appr_radio" onChange={(e) => handleChange(e)}>
              <label>Approve By Client :: </label>
              <br />
              <label>
                <input
                  className="radio"
                  name="approve"
                  type="radio"
                  value="yes"
                />
                Yes
              </label>
              <label>
                <input
                  className="radio"
                  name="approve"
                  type="radio"
                  value="no"
                />
                No
              </label>
            </div>

            <div>
              <input
                type="text"
                placeholder="Developer Name"
                value={details.developer}
                name="developer"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <input
                type="date"
                placeholder="Select Date"
                value={details.date}
                name="date"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="modal_div">
              <button className="modal_btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TaskListTable;

