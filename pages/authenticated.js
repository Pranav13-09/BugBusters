import React from 'react'
import {useSession } from "next-auth/react";
import Navbar from '@/components/Navbar';
import Container from '@/components/container/Container';
import {useRouter} from "next/router"

const authenticated = () => {
  const router = useRouter();
  const { data: session } = useSession();
    const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/");
    },
  });

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