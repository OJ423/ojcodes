"use client";

import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function BottomNavigation() {
  const [activePage, setActivePage] = useState("")
  useEffect(() => {
    setActivePage(window.location.href)
  }, [])

  return(
    <div className="mb-32 grid gap-4 grid-cols-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/skills">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${activePage.includes('/skills') ? 'border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30' : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'}`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Skills{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              I`m a full-stack developer for web and mobile apps. 
            </p>
          </div>
        </Link>
        <Link href="/portfolio">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${activePage.includes('/portfolio') ? 'border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30' : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'}`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Portfolio{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Take a look at some of my work to get a feel for what I can do for you.
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${activePage.includes('/about') ? 'border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30' : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'}`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get a feel for who I am and learn how I got into software development.
            </p>
          </div>
        </Link>
        <Link href="/contact">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${activePage.includes('/contact') ? 'border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30' : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'}`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contact{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            I`m always up for a chat. Get in touch to start the convo.
            </p>
          </div>
        </Link>
      </div>
  )
}