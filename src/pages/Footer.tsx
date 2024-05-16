import NavLink from '@/components/NavLink'
import { ChildText, Paragraph } from '@/components/Text'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative h-[40svh] md:h-[90svh] p-0 md:p-8 border-t border-shbrown/50'>
      <div className='flex justify-between w-full md:w-3/5'>
        <div>
          <ChildText cn="text-lg md:text-xl mb-8">Company</ChildText>
          <ul>
            {['Carriers','Partners','Press'].map((link,idx) => (
              <li key={`i_${idx}`}>
                <NavLink cn="text-left text-xs md:text-sm">{link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ChildText cn="text-lg md:text-xl mb-8">Social</ChildText>
          <ul>
            {['Instagram','LinkedIn','X'].map((link,idx) => (
              <li key={`i_${idx}`}>
                <NavLink cn="text-left text-xs md:text-sm">{link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ChildText cn="text-lg md:text-xl mb-8">Infos</ChildText>
          <ul>
            {['Info cookies','Testimonials','Terms and conditions'].map((link,idx) => (
              <li key={`i_${idx}`}>
                <NavLink cn="text-left text-xs md:text-sm">{link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Paragraph cn="text-right text-shorange">since 2020</Paragraph>
        <h1 className="text-6xl md:text-[12rem] font-black text-center line-clamp-1 leading-tight text-shorange">CANVAS</h1>
      </div>
    </div>
  )
}

export default Footer