'use client'

import HeadText, { Paragraph } from "@/components/Text"
import { trends } from "@/assets/trends"
import Grid from "@/components/Grid"
import { useRef } from "react"

// gsap
import { useGSAP } from "@gsap/react"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Trending = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(() => {
    let mm = gsap.matchMedia();
    
    mm.add({
      isDesktop:"(min-width:768px)",
      isMobile:"(max-width:767px)"
    },(context) => {
      let {isDesktop,isMobile} = context.conditions!
      const target = gsap.utils.toArray(".gridImg")
  
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:container.current,
          scrub:true,
          start:"top center+=100",
          end:"center center",
        },
      })
      target.forEach((tr:any) => {
        tl.from(tr,{
          x: isDesktop ? 100 : 0,
          opacity: 0,
          stagger: isDesktop ? 0.4 : 0,
        }).to(tr,{
          x:0,
          opacity:1,
        })
      })
    })

  },{scope:container})

  return (
    <div className="h-auto md:h-[100svh] py-10" ref={container}>
      <HeadText>TRENDING</HeadText>
      <div className="grid grid-cols-1 grid-row-4 md:grid-cols-4 md:grid-row-0 gap-4 justify-between mt-10">
        {trends.map((trend,idx) => (
          <div key={`i_${idx}`} className="gridImg grid justify-items-center">
            <Grid url={trend?.url} title={trend?.title} cn="w-[260px] h-[270px]" />
            <div>
              <Paragraph cn="font-bold mt-2 text-xs text-center md:text-left">{trend?.title}</Paragraph>
              <Paragraph cn="font-bold text-xs my-4 md:my-8 text-center md:text-left">{trend?.author}</Paragraph>
              <Paragraph cn="text-xs text-justify text-center md:text-left">{trend?.desc}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending