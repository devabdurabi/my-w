import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Rating = () => {
  return (
    <div className='flex text-yellow-400'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar className='text-zinc-200' />

            </div>
  )
}

export default Rating