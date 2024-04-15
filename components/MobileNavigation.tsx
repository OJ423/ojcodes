"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdCode, IoIosImages, IoIosPerson, IoIosCall } from "react-icons/io";
export default function MobileNavigation() {

  const [activePage, setActivePage] = useState("")
  useEffect(() => {
    setActivePage(window.location.href)
  }, [])

  return(
    <nav className="sm:hidden items-align-center">
      <ul>
        <Link href="/skills"><li className={`list-none inline-block me-2 ${activePage.includes('/skills') ? `text-teal-500` : null}`}><IoMdCode aria-label="Skills page" size={25}/></li></Link>
        <Link href="/portfolio"><li className={`list-none inline-block me-2 ${activePage.includes('/portfolio') ? `text-teal-500` : null}`}><IoIosImages aria-label="Portfolio page" size={25}/></li></Link>
        <Link href="/about"><li className={`list-none inline-block me-2 ${activePage.includes('/about') ? `text-teal-500` : null}`}><IoIosPerson aria-label="About me page" size={25}/></li></Link>
        <Link href="/contact"><li className={`list-none inline-block ${activePage.includes('/contact') ? `text-teal-500` : null}`}><IoIosCall aria-label="Contact me page" size={25}/></li></Link>
      </ul>
    </nav>
  )
}