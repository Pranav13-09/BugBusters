import React from 'react'
import {useSession } from "next-auth/react";

const authenticated = () => {
  const {  data:session, status } = useSession();
  
  console.log(session,"i am data okk")
  return (
    <div>authenticated</div>
  )
}

export default authenticated