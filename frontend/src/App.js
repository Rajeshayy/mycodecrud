import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './app/pages/Dashboard'
import Login from './app/components/Login';
import Students from './app/pages/Students'



import AddUser from './app/pages/AddUser';
import EditUser from './app/pages/EditUser';
import Users from './app/pages/Users';
import AddAttendance from './app/pages/AddAttendance';
import EditAttendance from './app/pages/EditAttendance';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/add" element={<AddUser/>}/>
      <Route path="/users/edit/:id" element={<EditUser/>}/>
      <Route path="/students" element={<Students/>}/>
      <Route path="/students/add" element={<AddAttendance/>}/>
      <Route path="/students/edit/:id" element={<EditAttendance/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
