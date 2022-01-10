import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import profile2 from '../assets/profile2.jpg'
import {Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationData } from "../redux/action/actions";

const ProfMenu = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  React.useEffect(() => {
    dispatch(getRegistrationData());
  }, []);

  const userHead = useSelector((data) => data.users.users);


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout=()=>{
    alert("you are logout")
    localStorage.clear()
  }

      return (
        <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
        <img 
        // src="https://us.123rf.com/450wm/opolja/opolja1512/opolja151200011/50162937-business-woman-working-on-laptop-computer-at-office.jpg?ver=6"
        src={profile2}
        style={{borderRadius: "100%", width:"40px", height:"40px"}} alt="Logo" />
        &nbsp;&nbsp;&nbsp;&nbsp;
          <h4>Nikhil Jikar</h4>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
        <div style={{width:"150px"}}>
          <MenuItem onClick={handleClose}>
          <Link to={`/profile/5`}>
          <span><img src="https://img.icons8.com/ios-glyphs/15/000000/person-male.png"/></span>
          &nbsp;&nbsp;&nbsp;
              Profile
              </Link>
        </MenuItem>
       
          <MenuItem onClick={handleClose}>
              <span><img src="https://img.icons8.com/ios/15/000000/settings--v1.png"/></span>
              &nbsp;&nbsp;&nbsp;
              Setting
            </MenuItem>
          <MenuItem onClick={handleClose}>
              <span><img src="https://img.icons8.com/ios-glyphs/15/000000/activity-history.png"/></span>
              &nbsp;&nbsp;&nbsp;
              Activity
            </MenuItem>
          <hr/>
          <MenuItem onClick={handleClose}>
              <span><img src="https://img.icons8.com/ios-glyphs/15/000000/logout-rounded--v1.png"/></span>
              &nbsp;&nbsp;&nbsp;
                <a
                  href="/"
                  // onClick={props.logout}
                  onClick={handleLogout}
                >
                  {/* <button onClick={handleLogout}>Log Out</button> */}
                  Logout
                </a>
            </MenuItem>
            </div>
        </Menu>
      </div>
    )
}

export default ProfMenu
