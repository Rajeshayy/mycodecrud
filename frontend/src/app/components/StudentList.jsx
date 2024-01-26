import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


const StudentList=()=> {
    const [students,setStudents] = useState([]);

    
    useEffect(()=>{
        getAddentance();
    },[]);

    const getAddentance = async()=>{
        const response = await axios.get('http://localhost:5000/products');
        setStudents(response.data);
    }

    const deleteAttendance = async(productId)=>{
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getAddentance();    
    }
  return (
    <div>
    <h1 className='title'>Students</h1>
    <h2 className='subtitle'>List of Students....</h2>
    <Link to="/students/add" className='button is-primary mb-2'>Add New</Link>
    <table className='table is-stripped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Registration Number</th>
                <th>Department</th>
                <th>Status</th>
                <th>Created By</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
                {students.map((student,index)=>(
                <tr key = {student.uuid}>
                    <td>{index +1}</td>
                    <td>{student.fname}</td>
                    <td>{student.lname}</td>
                    <td>{student.regdno}</td>
                    <td>{student.dept}</td>
                    <td>{student.status}</td>
                    <td>{student.user.name}</td>
                    <td>
                    <Link
                    to={`/students/edit/${student.uuid}`}
                    className="button is-small is-info"
                  >Edit</Link>
                        <button onClick={()=>deleteAttendance(student.uuid)} className='button is-small is-danger'>Delete</button>    
                    </td>
            </tr>

                ))}
            
        </tbody>
    </table>
    </div>
  )
}

export default StudentList
