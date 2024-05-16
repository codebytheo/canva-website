'use client'

import Image from "next/image"
import NavLink from "./NavLink"
import { ChildText } from "./Text"

// gsap
import gsap from 'gsap'
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

const Navbar = () => {
  const navbar = useRef<HTMLDivElement>(null)

  useGSAP(() =>{
    const tl = gsap.timeline()

    tl.to(navbar.current,{
      y:0,
      duration:0.4,
    })
  },{scope:navbar})

  return (
    <nav className="flex items-center justify-between py-2 -translate-y-10" ref={navbar}>
      <ChildText cn="text-shbrown text-sm md:text-2xl font-black">CANVAS</ChildText>
      <ul className="w-[220px] md:w-[350px] flex justify-between">
        {['Auction','buy','Artist','Services','About'].map((link,idx) => (
          <li key={`i_${idx}`}>
            <NavLink cn="text-[10px] md:text-sm text-shorange">{link}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2 md:space-x-4 items-center">
        {["/img/bag.png","/img/search.png"].map((d,idx) => (
          <div key={`i_${idx}`}>
            <NavLink>
              <div className="relative h-[14px] w-[14px] md:h-[20px] md:w-[20px]">
                <Image src={d} fill alt="icon" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar