import React from "react";
import "./dashboard.scss";
import { Switch, Route } from "react-router-dom";
import AddProjects from "../projects/AddProjects";
import ListProject from "../projects/ListProject";
import IndiDashboard from "./IndiDashboard";
import Error from "../headers/Error";
import ProfMenu from "../headers/ProfMenu";
const Dashboard = (props) => {
  return (
    <>
      <div>
        <div class="admin">
          <header class="admin__header">
            <a href="#" class="logo">
              <h1>Dashboard</h1>
            </a>
            <div class="toolbar">
              {/* <div class="toolbar__left">
              <button class="btn btn--primary">Add content</button>
            </div> */}
              {/* <div class="toolbar__right">
                <a
                  href="/"
                  class="btn btn--primary logout"
                   onClick={props.logout}
                >
                  <button onClick={props.logout}>Log Out</button>
                  LogOut
                </a>
              </div> */}


              <div class="toolbar__right">
                <ProfMenu />
              </div>



            </div>
          </header>
          <nav class="admin__nav">
            <ul class="menu">
              <li class="menu__item">
                <a class="menu__link" href="#">
                  Dashboard
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="#">
                  Performance
                </a>
              </li>
            </ul>
          </nav>
       
      <main class="admin__main">
        <ListProject />
        <Switch>
      {/* <Route path='/' exact render={()=><ListProject/>}/> */}
      <Route path='/' exact exact component={ListProject}/>
      {/* <Route path='/indidashboard' exact exact component={ListProject}/> */}
      {/* <Route path='/addproject' exact component={AddProjects}/>
        <Route path='/indidashboard/1' exact component={IndiDashboard}/> */}
       </Switch>
        </main>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
