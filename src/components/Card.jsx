import React from 'react'
import Image from "next/image"
import blogF from "../app/assets/blog1.jpg"
import { AiFillStar } from 'react-icons/ai'
import Rating from './Rating'

const Card = () => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl'>
         <Image className='h-40 w-full object-cover' src={blogF} alt="logo foto shop me"/>

         <div className='p-5'>
            <h1>Ontdek hoe je echt start</h1>
            <Rating />

         </div>

    </div>
  )
}

export default Card