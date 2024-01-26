import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import {IoPerson, IoPrice,IoHome,IoLogOut, IoPricetag} from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { Logout,reset } from '../features/authSlice'
function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.auth)
  const logout=()=>{
    dispatch(Logout());
    dispatch(reset())
    navigate("/")
  }
  return (
    <div>
    <aside className="menu pl-2 has-shadow">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <NavLink to={"/dashboard"}><IoHome/>
             Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={"/students"}><IoPricetag/>
             Students
          </NavLink>
        </li>
      </ul>
      {user && user.role =="admin" && (
        <div>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>
            <IoPerson/> Users
            </NavLink>
          </li>
        </ul>
        </div>
      )}
     <p className="menu-label">Settings</p>
        <ul className="menu-list">
        <li><IoLogOut/>
          <button onClick={logout}  className="button is-white">
             Logout
          </button>
        </li>
      </ul>
    </aside>
  </div>
);
};

export default Sidebar;
