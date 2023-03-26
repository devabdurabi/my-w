import Image from "next/image"
import React from "react"
import heroImg from "../app/assets/cta.png"
import {AiOutlineSearch} from 'react-icons/ai'
 
const HomeHeader = () => {
  return (
    <section className="w-full bg-white">
      <div className="md:max-w-[1280px] max-w-[600px] m-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#0e0b2a] font-bold ">Start to Success</p>
          <h1 className="md:leading-[72px] py-2 text-5xl md:text-6xl text-[#536e96]">
            Beste online netwerk voor Jongeren
          </h1>
          <p className="py-4 text-lg text-gray-500">
            Een platform waar jongeren worden gemotiveerd door gespecialezeerde
            proffesionals
          </p>
          <form className="p-4 w-[500px] shadow-lg rounded-md flex justify-between">
            <input className="bg-white " type="text" placeholder="Wat wil je leren?"/>
            <button>
              <AiOutlineSearch size={20} className= " text-gray-300"/>
            </button>
          </form>
        </div>

        <Image src={heroImg} alt="" className="md:order-last order-first"/>
      </div>
    </section>
  )
}

export default HomeHeader
