import Image from "next/image"
import Link from "next/link"

export default function OjCodesLogo() {
  return(
    <div className="static h-auto w-auto bg-none">
      <Link href="/">
        <div
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0">
          <Image
          src="/ojcodes-logo.svg"
          alt="OJ Codes Logo"
          className="dark:invert"
          width={50}
          height={12}
          priority
          style={{height:'auto'}}
        />
      </div>
    </Link>
  </div>
  )
}