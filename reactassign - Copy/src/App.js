import React,{useState} from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ListProject from './projects/ListProject';
import AddProjects from './projects/AddProjects'
import Error404 from './components/Error404';
import Dashboard from './dashboard/Dashboard';
import { List } from 'reactstrap';
import IndiDashboard from './dashboard/IndiDashboard';
import Profile from './components/Profile';
import EditTask from './dashboard/EditTask';
import ProtectedRoute from './ProtectedRoute';
function App() {

  return (
    <div className="Apps">
      {/* <IndiDashboard /> */}
      <Switch>
      <Route path='/' exact component={Login}/>
      <Route path='/signup' exact component={SignUp}/>
      <ProtectedRoute path='/profile' exact component={Profile}/>
      <ProtectedRoute path='/addproject' exact component={AddProjects}/>
      <ProtectedRoute path='/dashboard' exact component={Dashboard}/>
      <ProtectedRoute path='/indidashboard/:id/:project' exact component={IndiDashboard}/>
      <ProtectedRoute path='/indidashboard/:id/:tproject/edittask' exact component={EditTask}/>
      <ProtectedRoute path='*' exact component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
