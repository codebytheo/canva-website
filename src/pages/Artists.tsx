'use client'

import { artists } from '@/assets/artists'
import Grid from '@/components/Grid'
import HeadText, { Paragraph } from '@/components/Text'
import { useRef } from 'react'

// gsap
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Artists = () => {
  const container = useRef<HTMLDivElement>(null)
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
      <HeadText>Artist</HeadText>
      <Paragraph cn="text-center text-xl font-semibold">our top artists</Paragraph>
      <div className="grid grid-cols-1 grid-row-4 md:grid-cols-4 md:grid-row-1 gap-4 justify-between mt-10">
        {artists.map((artist,idx) => (
          <div key={`i_${idx}`} className='gridImg grid justify-items-center'>
            <Grid url={artist?.url} title={artist?.author}  cn="w-[260px] h-[270px]" />
            <div>
              <Paragraph cn="font-semibold text-xl text-center my-4">{artist?.author}</Paragraph>
              <Paragraph cn="text-xs text-justify">{artist?.desc}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Artists