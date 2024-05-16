import About from "@/pages/About"
import Artists from "@/pages/Artists"
import Footer from "@/pages/Footer"
import Heros from "@/pages/Heros"
import Trending from "@/pages/Trending"
import Upcoming from "@/pages/Upcoming"

export default function Home() {
  return (
    <>
      <Heros />
      <Upcoming />
      <Trending />
      <Artists />
      <About />
      <Footer />
    </>
  )
}
