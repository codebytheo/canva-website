import Image from "next/image"
type grid = {
  url:string,
  title:string,
  cn?:string
}

const Grid = ({url,title,cn}:grid) => {
  return (
    <div className={`relative overflow-hidden ${cn}`}>
      <Image src={url} fill alt={title} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover brightness-75 hover:scale-105 transition-all duration-200 ease-out"/>
    </div>
  )
}

export default Grid