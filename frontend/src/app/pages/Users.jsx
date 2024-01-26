import React,{useEffect} from 'react'
import Layout from '../pages/Layout'

import UserList from '../components/UserList'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { getMe } from '../features/authSlice'

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError,user} = useSelector((state)=> state.auth)

  useEffect(()=>{
    dispatch(getMe())
  },[dispatch])

  useEffect(()=>{
    if(isError){
      navigate("/");
  }
  if(user && user.role !=="admin"){
    navigate("/dashboard")
  }
},[isError,user,dispatch]);

  return (
    <div>
        <Layout>
            <UserList/>
        </Layout>
    </div>
  )
}

export default Users
