import React from "react"

type Props = {
  children:React.ReactNode,
}

const Button = ({children}:Props) => {
  return (
    <button className="bg-shwhite px-6 py-2 absolute bottom-32 left-8 z-50 text-sm font-semibold">{children}</button>
  )
}

export default Button