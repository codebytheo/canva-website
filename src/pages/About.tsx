import HeadText, { Paragraph } from "@/components/Text"
import Image from "next/image"

const About = () => {
  return (
    <div className="h-auto md:h-[70svh] py-10">
      <HeadText>About</HeadText>
      <div className="w-full h-auto md:h-[300px] bg-shblack flex flex-col md:flex-row justify-between items-center p-4 mt-10 gap-y-2 md:gap-y-0">
        <div className="w-auto md:w-[450px]">
          <Paragraph cn="text-shwhite text-justify text-xs md:text-sm">
            We are Canvas Community, we build this website for all creatives all over the world to put their best painting in this website, either they can sell it or show off their works.
            <br/><br/>
            We help them reach other painters out there to  inspire each other.
            <br/><br/>
            We make them easy to sell their painting and easy to get their money.
            <br/><br/>
            Enjoy your journey.
          </Paragraph>
        </div>
        <div className="w-full md:w-1/2 h-[200px] md:h-full relative">
          <Image src="/img/about-1.webp" fill alt="about pics" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About