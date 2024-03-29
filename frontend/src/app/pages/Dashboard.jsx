import React, { useEffect } from 'react'
import Layout from './Layout'
import Welcome from '../components/Welcome'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { getMe } from '../features/authSlice'

const Dashboard = () => {
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
      <Welcome/>
    </Layout>
  )
}

export default Dashboard
