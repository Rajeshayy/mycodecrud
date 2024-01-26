import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddAttendance = () => {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [regdno,setregdno] = useState("")
    const [dept,setDept] = useState("")
    const [date,setDate] = useState("")
    const [msg, setMsg] = useState(""); 
    const [status,setStatus] = useState("")
    const navigate = useNavigate();
    

  const saveAttendance = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        fname: fname,
        lname: lname,
        regdno: regdno,
        dept:dept,
        status: status,  
        date: date
      });
      navigate("/students");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className='title'>Users</h1>
      <h2 className='subtitle'>Add Attendance</h2>
      <div className='card is-shadowless'>
        <div className='card-content'>
            <div className='content'>
            <form onSubmit={saveAttendance}> 
                <p className='has-text-centered'>{msg}</p>
            <div className="field">
                <label className="label">
                    First Name
                </label>
                <div className="control">
                    <input type="text"  className="input"
                     value ={fname} 
                     onChange={(e)=> setFname(e.target.value)}
                     placeholder="firstname"/>
                </div>
            </div>
                <div className="field">
                    <label className="label">
                        Last Name
                    </label>
                    <div className="control">
                        <input type="text" className="input"
                        value ={lname} 
                     onChange={(e)=> setLname(e.target.value)} placeholder="lastname"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">
                        Registration Number
                    </label>
                    <div className="control">
                        <input type="text" className="input"
                        value ={regdno} 
                     onChange={(e)=> setregdno(e.target.value)} placeholder="regdno"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">
                        Department
                    </label>
                    <div className="control">
                        <input type="text" className="input"
                        value ={dept} 
                     onChange={(e)=> setDept(e.target.value)} placeholder="dept"/>
                    </div>
                </div>
                <div className="field">
                <label className="label">Status</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                    </select>
                  </div>
                </div>
                </div>
                <div className="field">
                    <label className="label">
                        Date
                    </label>
                    <div className="control">
                        <input type="text" className="input"
                        value ={date} 
                     onChange={(e)=> setDate(e.target.value)} placeholder="date"/>
                    </div>
                </div>
                
                <div className="field">
                    <div className='control'>
                    
                    <button type="submit" className="button is-success">Save</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
      </div>
      </div>
  )
}


export default FormAddAttendance;