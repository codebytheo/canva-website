'use client'
import Grid from '@/components/Grid'
import HeadText, { Paragraph } from '@/components/Text'
import { useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"

const data = [
  {
    url:'/img/upcoming-1.webp',
    title:'Europe',
    p:'20 stocks'
  },
  { 
    url:'/img/upcoming-2.webp',
    title:'Japan',
    p:'10 stocks'
  },
]

const Upcoming = () => {
  const container = useRef<HTMLDivElement>(null)
  const upcomingHero = useRef<HTMLDivElement>(null)

  let mm = gsap.matchMedia()
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    mm.add({
      isDesktop:"(min-width:768px)",
      isMobile:"(max-width:767px)"},
      (context) => {
        let {isDesktop,isMobile} = context.conditions!

        gsap.timeline({
          scrollTrigger: {
            trigger: upcomingHero.current,
            scrub: true,
            start: "top bottom",
            end: isDesktop ? "bottom center" : "center center",
          }
        }).to(upcomingHero.current, {
          y:0,
          opacity:1
        })
      })
  },{scope:container})

  return (
    <div className='h-[100svh] md:h-[90svh] py-10' ref={container}>
      <HeadText>UPCOMING</HeadText>
      <div className='flex justify-between mt-10 flex-col md:flex-row translate-y-20 opacity-0 gap-y-2 md:gap-y-0' ref={upcomingHero}>
        {data.map((d,idx) => (
          <div key={`i_${idx}`} className='relative'>
            <Grid url={d?.url} title={d?.title} cn="w-[380px] h-[300px] md:w-[540px] md:h-[350px]" />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Paragraph cn="text-2xl text-center text-shwhite">{d?.title}</Paragraph>
              <Paragraph cn="text-center text-shwhite">{d?.p}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Upcoming
