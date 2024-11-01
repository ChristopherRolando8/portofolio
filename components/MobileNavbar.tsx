"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Portofolio",
        path: "/work",
    },
    {
        name: "Contact",
        path: "https://wa.me/6287889813123",
    },
  ]

const MobileNavbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={() => setIsOpen(true)}  className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href= "/" onClick={handleLinkClick}>
                        <div className="flex flex-row">
                            <img
                                src="/assets/logo.png"
                                alt="Logo"
                                className="w-16 h-16 mr-2"
                            />
                            <h1 className="text-4xl font-semibold flex justify-center items-center">
                                CR <span className="text-accent">.</span>
                            </h1>
                        </div>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                        <Link
                            onClick={handleLinkClick}
                            href={link.path}
                            key={index}
                            target={link.name === "Contact" ? "_blank" : "_self"}
                            rel={link.name === "Contact" ? "noopener noreferrer" : ""}
                            className={`${
                                link.path === pathname && "text-accent border-b-2 border-accent"
                            } text-xl capitalize hover:text-accent transition-all`}
                            >
                            {link.name}
                        </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar