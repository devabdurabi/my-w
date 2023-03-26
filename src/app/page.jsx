import Blogs from '@/components/Blogs'
import Companies from '@/components/Companies'
import Navbar from '@/components/Navbar'
import React from 'react'
import HomeHeader from '../components/HomeHeader'


const page = () => {
  return (
    
    <>
    <Navbar />
    <HomeHeader />
    <Companies/>
    <Blogs />
    </>

  )
}

export default page