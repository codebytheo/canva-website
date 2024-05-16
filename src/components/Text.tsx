'use client'

import React, { useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

type props = {
  children: React.ReactNode,
  cn?:string
}
const HeadText = ( {children,cn}:props ) => {
  const text = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to(text.current, {
      scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "top bottom",
          end: "bottom+=200 center",
      },
      opacity: 1,
      y: 0,
      duration:0.2,
      ease: "easeOut",
  })
  },{scope:text})
  return (
    <h1 className={`text-3xl uppercase font-black text-center opacity-0 translate-y-5 ${cn}`} ref={text}>{children}</h1>
  )
}

export default HeadText

export const Paragraph = ({children,cn}:props) => {
  return (
    <p className={`${cn}`}>{children}</p>
  )
}

export const ChildText = ({children,cn}:props) => {
  return (
    <h2 className={`font-black text-2xl ${cn}`}>{children}</h2>
  )
}