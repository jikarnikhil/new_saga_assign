// import React, { useEffect, useState } from 'react'
// function EditTask() {
//   const [users, setUser] = useState([])
//   const [name, setName] = useState("");
//   const [id,setId]=useState(null)

//   useEffect(() => {
//     getUsers();
//   }, [])
//   function getUsers() {
//     fetch("http://localhost:3005/todo").then((result) => {
//       result.json().then((resp) => {
//         // console.warn(resp)
//         setUser(resp)
//         setName(resp[0].name)
//         setId(resp[0].id)
//       })
//     })
//   }

//     function deleteUser(id) {
//     fetch(`http://localhost:3005/mydt/${id}`, {
//       method: "DELETE",
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp);
//         getUsers();
//       });
//     });
//   }

//   function selectUser(id)
//   {
//     let item=users[id-1];
//     setName(item.name)
//         setId(item.id)
//   }
//   function updateUser()
//   {
//     let item={name}
//     console.warn("item",item)
//     fetch(`http://localhost:3005/mydt/${id}`, {
//       method: 'PUT',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(item)
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }
//   return (
//     <div className="App">
//       <h1>Update User Data With API </h1>
//       <table border="1" style={{ float: 'left' }}>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Operations</td>
//           </tr>
//           {
//             users.map((item, i) =>
//               <tr key={i}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
//                 <td><button onClick={() => selectUser(item.id)}>Update</button></td>

//               </tr>
//             )
//           }
//         </tbody>
//       </table>
//       <div>
//       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
//         <button onClick={updateUser} >Update User</button>
//       </div>
//     </div>
//   );
// }
// export default EditTask;

import "./edittask.css";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "react-hooks-use-modal";
import TaskListTable from "./TaskListTable";

function EditTask() {
  const [toggle, setToggle] = useState(false);
  const [users, setUser] = useState([]);
  const [project, setProject] = useState("");
  const [dura, setDura] = useState("");
  const [finT, setFinT] = useState("");
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [qa, setQa] = useState("");
  const [quality, setQuality] = useState("");
  const [approve, setApprove] = useState("");
  const [developer, setDeveloper] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(null);

  const { tid, tproject } = useParams();
  const history = useHistory();
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    fetch("http://localhost:3005/mydt").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
        setProject(resp[0].project);
        setDura(resp[0].dura);
        setFinT(resp[0].finT);
        setStatus(resp[0].status);
        setComment(resp[0].comment);
        setReply(resp[0].reply);
        setQa(resp[0].qa);
        setQuality(resp[0].quality);
        setApprove(resp[0].approve);
        setDeveloper(resp[0].developer);
        setDate(resp[0].date);
        setId(resp[0].id);
      });
    });
  }

  function deleteUser(id) {
    fetch(`http://localhost:3005/mydt/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }

  function selectUser(id) {
    let item = users[id - 1];
    setProject(item.project);
    setDura(item.dura);
    setFinT(item.finT);
    setStatus(item.status);
    setComment(item.comment);
    setReply(item.reply);
    setQa(item.qa);
    setQuality(item.quality);
    setApprove(item.approve);
    setDeveloper(item.developer);
    setDate(item.date);
    setId(item.id);

    open();
    // setToggle(true)
  }
  function updateUser() {
    let item = {
      project,
      dura,
      finT,
      status,
      comment,
      reply,
      qa,
      quality,
      approve,
      developer,
      date,
    };
    // console.warn("item",item)
    fetch(`http://localhost:3005/mydt/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
    close();
  }

  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  return (
    <div>
      <div className="main_container">
        <header class="admin__header">
          <a href="#" class="logo">
            <h1>Dashboard</h1>
          </a>
          <div class="toolbar"></div>
        </header>
      </div>

      <div className="table_main">
        <div className="edittask_btn">
          <button class="edit_task_back" onClick={() => history.goBack()}>
            Back
          </button>
          <TaskListTable />
        </div>
        <h1>Update Task Data Here</h1>
        <table border="1" style={{ float: "left", layout: "fixed" }}>
          <tbody>
            <tr >
              <th>ID</th>
              <th>Project</th>
              <th>Name</th>
              <th>Final time</th>
              <th>status</th>
              <th>Comment</th>
              <th>Retply</th>
              <th>QA</th>
              <th>Code quality</th>
              <th>Approve by client</th>
              <th>Developer name</th>
              <th>Date</th>
              <th>Operations</th>
            </tr>
            {users
              .filter((user) => user.project == tproject)
              .map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.project}</td>
                  <td>{item.dura}</td>
                  <td>{item.finT}</td>
                  <td>{item.status}</td>
                  <td>{item.comment}</td>
                  <td>{item.reply}</td>
                  <td>{item.qa}</td>
                  <td>{item.quality}</td>
                  <td>{item.approve}</td>
                  <td>{item.developer}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className="up_del">
                      <button onClick={() => selectUser(item.id)}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" />
                      </button>
                      <button onClick={() => deleteUser(item.id)}>
                        <img src="https://img.icons8.com/material-sharp/24/000000/filled-trash.png" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Modal>
          <div className="edi_container">
            <img
              className="close_icon"
              onClick={close}
              src="https://img.icons8.com/cotton/30/000000/delete-sign.png"
            />
            <div>
              <input
                type="text"
                value={project}
                onChange={(e) => {
                  setProject(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={dura}
                onChange={(e) => {
                  setDura(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={finT}
                onChange={(e) => {
                  setFinT(e.target.value);
                }}
              />
            </div>

            <div className="edit_select">
              {/* <input
              type="text"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            /> */}
              <select
                id="dropdown"
                name="status"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
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
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={reply}
                onChange={(e) => {
                  setReply(e.target.value);
                }}
              />
            </div>
            {/* <div>
              <input
                type="text"
                value={qa}
                onChange={(e) => {
                  setQa(e.target.value);
                }}
              />
            </div> */}
            <div
              className="appr_radio"
              onChange={(e) => {
                setQa(e.target.value);
              }}
              value={qa}
            >
              <label>Approve By Client :: </label>
              <br />
              <label>
                <input
                  className="radio"
                  name="qa"
                  type="radio"
                  value="yes"
                />
                Yes
              </label>
              <label>
                <input
                  className="radio"
                  name="qa"
                  type="radio"
                  value="no"
                />
                No
              </label>
            </div>

            <div className="edit_select">
              {/* <input
              type="text"
              value={quality}
              onChange={(e) => {
                setQuality(e.target.value);
              }}
            /> */}
              <select
                id="dropdown"
                name="quality"
                onChange={(e) => {
                  setQuality(e.target.value);
                }}
                value={quality}
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

            {/* <div>
            <input
              type="text"
              value={approve}
              onChange={(e) => {
                setApprove(e.target.value);
              }}
            />
             </div> */}

            <div
              className="appr_radio"
              onChange={(e) => {
                setApprove(e.target.value);
              }}
              value={approve}
            >
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
                value={developer}
                onChange={(e) => {
                  setDeveloper(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>

            <div className="modal_div">
              <button className="modal_btn" onClick={updateUser}>Update User</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default EditTask;
