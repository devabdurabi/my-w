"use client"
import Image from "next/image"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import logo from "../app/assets/logo4.png"

const Navbar = () => {
  //   const [toggle, setToggle] = useState(false)
  //   const handleClick = () => setToggle(!toggle)

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className="w-full h-[70px] bg-white ">
      <nav className="md:max-w-[1280px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
        <Image src={logo} width={120} height={120} alt="logo foto shop me" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <button className="hidden md:flex px-4 py-3 bg-[#536e96] rounded-md text-white">
            Connecten
          </button>
        </div>

        {/* src {toggle?AiOutlineClose:AiOutlineMenu} */}
        {/* <div className="md:hidden " onClick={handleClick}>
          <AiOutlineMenu size={26} />
        </div> */}

        {/* Hier komt de hamburger icon/mobile first */}
        <div onClick={handleNav} className="block md:hidden">
          {/* als nav true is.. laat x zien zo niet hamburger */}
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        

        <div
          className={
            nav
              ? "w-full h-full bg-zinc-400 text-white absolute top-[90px] left-0 flex justify-center"
              : " absolute left-[-100%]"
          }
        >
          <ul>
            <li className="p-4 text-2xl ">About</li>
            <li className="p-4 text-2xl ">Ervaring</li>
            <li className="p-4 text-2xl ">Weetjes</li>
            <li className="p-4 text-2xl ">Contact </li>
            {/* <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-7 rounded-3xl">
              Contact Nu
            </button> */}
          </ul>
        </div>

        {/* <div className="hidden">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar
