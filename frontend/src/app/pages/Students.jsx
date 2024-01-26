import React,{useEffect} from 'react'
import Layout from './Layout'
import StudentList from '../components/StudentList'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { getMe } from '../features/authSlice'

function Students() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state)=> state.auth)

  useEffect(()=>{
    dispatch(getMe())
  },[dispatch])

  useEffect(()=>{
    if(isError){
      navigate("/");
  }
},[isError,dispatch]);
  return (
    <div>
      <Layout>
        <StudentList/>
      </Layout>
    </div>
  )
}

export default Students
