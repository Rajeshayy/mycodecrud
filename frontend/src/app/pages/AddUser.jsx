import React,{useEffect} from 'react'
import Layout from './Layout'
import FormAddUser from '../components/FormAddUser'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { getMe } from '../features/authSlice'

function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError,user } = useSelector((state)=> state.auth)

  useEffect(()=>{
    dispatch(getMe())
  },[dispatch])

  useEffect(()=>{
    if(isError){
      navigate("/");
  }
  if(user && user.role !== "admin"){
    navigate("/dashboard")
  }
},[isError,user,dispatch]);
  return (
    <Layout>
    <FormAddUser/>
    </Layout>
  )
}

export default AddUser
