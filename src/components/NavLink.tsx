import Link from "next/link"

type props = {
  children:React.ReactNode,
  cn?:string,
}

const NavLink = ({children,cn}:props) => {
  return (
    <Link href="/" className={`font-semibold hover:opacity-50 ${cn}`}>{children}</Link>
  )
}

export default NavLink