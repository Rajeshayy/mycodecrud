import React,{useEffect} from 'react'
import Layout from './Layout'
import FormAddAttendance from '../components/FormAddAttendance'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { getMe } from '../features/authSlice'

function AddAttendance() {
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
    <Layout>
    <FormAddAttendance/>
    </Layout>
  )
}

export default AddAttendance
