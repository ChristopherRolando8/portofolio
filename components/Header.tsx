import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./Navbar"
import MobileNavbar from "./MobileNavbar"

const header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href= "/">
          <h1 className="text-4xl font-semibold flex items-center">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-16 h-16 mr-2"
            />
            CR <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link target="_blank" href="https://wa.me/6287889813123">
            <Button>
              Contact me
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  )
}

export default header