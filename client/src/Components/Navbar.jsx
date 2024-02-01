import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="  flex px-10  justify-between">
    <img
      src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1706634689/Screenshot_697_juwoja.png"
      className="w-52 h-14"
    />
    <span className="text-black text-3xl pr-9 mt-1">
      <IoSunnyOutline />
    </span>
  </div>
  )
}

export default Navbar