/* eslint-disable react/prop-types */
// import React from 'react'
import { useAuth } from '../Context/Authinicetion'
import { Navigate } from 'react-router-dom';

export default function CheckAuth({children}) {
  const {currentUser} =  useAuth();
   return currentUser ? <Navigate to="/login" replace="true"/> : children  
}
