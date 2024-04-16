"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosFlame, IoIosImages, IoIosPerson, IoIosCall } from "react-icons/io";
export default function MobileNavigation() {

  const [activePage, setActivePage] = useState("")
  useEffect(() => {
    setActivePage(window.location.href)
  }, [])

  return(
    <nav className="sm:hidden items-align-center">
      <ul>
        <li className={`list-none inline-block me-2 ${activePage.includes('/skills') ? `text-teal-500` : null}`}><Link href="/skills"><IoIosFlame aria-label="Skills page" size={25}/></Link></li>
        <li className={`list-none inline-block me-2 ${activePage.includes('/portfolio') ? `text-teal-500` : null}`}><Link href="/portfolio"><IoIosImages aria-label="Portfolio page" size={25}/></Link></li>
        <li className={`list-none inline-block me-2 ${activePage.includes('/about') ? `text-teal-500` : null}`}><Link href="/about"><IoIosPerson aria-label="About me page" size={25}/></Link></li>
        <li className={`list-none inline-block ${activePage.includes('/contact') ? `text-teal-500` : null}`}><Link href="/contact"><IoIosCall aria-label="Contact me page" size={25}/></Link></li>
      </ul>
    </nav>
  )
}