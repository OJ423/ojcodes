import Link from "next/link";

export default function HireMeButton() {
  return(
    <Link href="/contact">
      <div className="rounded-md bg-teal-500 !text-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Hire me</div>
    </Link>
  )
}