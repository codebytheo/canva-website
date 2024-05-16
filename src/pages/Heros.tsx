'use client'

import Button from "@/components/Button";
import Grid from "@/components/Grid";
import { Paragraph } from "@/components/Text";
import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap';
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLDivElement>(null)
  const hero1 = useRef<HTMLDivElement>(null)
  const hero2 = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.timeline().to(hero1.current,{
      delay:0.6,
      clipPath:"polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
      duration:0.8,
    }).to(hero2.current,{
      clipPath:"polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
      duration:0.8,
    })
  },{scope:container})

  return (
    <main className="relative md:h-[calc(100svh-48px)] flex justify-between items-center flex-col md:flex-row gap-y-2 md:gap-y-0 mt-2 md:mt-0" ref={container}>
      <div className="relative origin-top clip-hidden" ref={hero1}>
        <Grid url="/img/home-1.webp" title="home-1" cn="md:w-[650px] md:h-[550px] w-[380px] h-[300px]" />
        <div className="absolute bottom-48 px-8">
          <Paragraph cn="text-xl text-shwhite font-bold">Driving Home The Flock</Paragraph>
          <Paragraph cn="text-lg text-shwhite/80 font-semibold">Robert Hills</Paragraph>
        </div>
        <Button>VIEW</Button>
      </div>
      <div className="relative origin-top clip-hidden" ref={hero2}>
        <Grid url="/img/home-2.webp" title="home-2" cn="md:w-[430px] md:h-[550px] w-[380px] h-[350px]" />
        <div className="absolute bottom-48 px-8">
          <Paragraph cn="text-lg text-shwhite font-bold">See that tree in the light? That’s where Tarzan grew up, so I think</Paragraph>
          <Paragraph cn="text-lg text-shwhite/80 font-semibold">Dino Walsh</Paragraph>
        </div>
        <Button>VIEW</Button>
      </div>
    </main>
  )
}
