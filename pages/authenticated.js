import React from 'react'
import {useSession } from "next-auth/react";
import Navbar from '@/components/Navbar';
import Container from '@/components/container/Container';


const authenticated = () => {
  const {  data:session, status } = useSession();
  
  console.log(session,"i am data okk")
  return (
    <>
      {/* <div>authenticated</div> */}
      <Navbar></Navbar>
      <Container></Container>
    </>
  )
}

export default authenticated