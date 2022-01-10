import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./taskview.css";
import { useModal } from "react-hooks-use-modal";


export default function App() {
  const { project, id } = useParams();
  const [users, setUsers] = useState([]);

  const getTasksDetals = () => {
    axios
      .get("http://localhost:3005/mydt")
      .then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => getTasksDetals(), []);

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:3005/mydt/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const Tasksubmit=(e)=>{
    e.preventDefault()
  }
  const handleChange=()=>{

  }
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  return (
    <>
      <div className="table_cont">
        <h2 style={{ textAlign: "center" }}>Task Details and Timelines</h2>
        {/* <DragDropContext onDragEnd={handleDragEnd}> */}
        <table className="table borderd">
          <thead>
            <tr>
              {/* <th /> */}
              <th>Duration</th>
              <th>Final Time</th>
              <th>Status</th>
              <th>Comment</th>
              <th>Retply</th>
              <th>QA</th>
              <th>Code quality</th>
              <th>Approve by client</th>
              <th>Developer name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.project == project)
              .map((user, i) => (
                <tr key={i}>
                  <>
                    <td>{user.dura}</td>
                    <td>{user.finT}</td>
                    <td>{user.status}</td>
                    <td>{user.comment}</td>
                    <td>{user.reply}</td>
                    <td>{user.qa}</td>
                    <td>{user.quality}</td>
                    <td>{user.approve}</td>
                    <td>{user.developer}</td>
                    <td>{user.date}</td>
                    <td>
                      <div className="edi_del_btn">
                        <button className="edit"
                        // onClick={open}
                        >
                          <img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" />
                        </button>
                        <button
                          className="delete"
                          onClick={() => deleteTask(user.id)}
                        >
                          <img src="https://img.icons8.com/material-sharp/24/000000/filled-trash.png" />
                        </button>
                      </div>
                    </td>
                  </>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </>
  );
}


