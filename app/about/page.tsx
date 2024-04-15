import BottomNavigation from '@/components/bottom-navigation'
import HireMeButton from '@/components/hire-me-button';
import OjCodesLogo from "@/components/ojcodes-logo";
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import MobileNavigation from '@/components/MobileNavigation';

export const metadata: Metadata = {
  title: "Find out about Oliver",
  description: "I'm a hard working, creative problem solver with a keen eye for detail. Find out more about me and what I could bring to you.",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-12 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <HireMeButton/>
        <MobileNavigation/>
        <OjCodesLogo/>
      </div>
      <section className="max-w-screen-lg grid gap-12 grid-cols-1 md:grid-cols-2 relative flex place-items-end before:absolute before:h-[300px] before:w-full sm:before:w-[480px] pt-10">
        <div>
          <h1 className="text-3xl mb-4 sm:text-6xl text-left font-black">Hello, I'm <span className="text-teal-500">Oliver</span></h1>
          <p className="mb-4 text-xl">I have over 25 years' experience for you to use. I'm a good communicator, hard working, and a creative problem solver.</p>
          <p className="mb-4 text-xl">I take great pride in my work and have a keen eye for detail. Software engineering is something I very much enjoy as it involves creativity, problem solving and means I get to build fantastic apps and services.</p>
          <p className="mb-4 text-xl">I'm available for hire, be it employment, contract work, or for bespoke projects. Please <Link href="/contact" className='text-teal-500 hover:text-teal-300'>get in touch</Link> to have a chat if you're looking for someone.</p>
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-black mb-4">A little about me...</h2>
          <p className="text-lg mb-4">Part of my old career involved graphic design, something I really enjoy. When I find the time I like to create digital artwork.</p>
          <p className="text-lg mb-4">I also enjoy writing and have written two books. The first a zombie thriller called <Link href="https://www.amazon.co.uk/Despair-Where-Oliver-Smith/dp/1527262065/" target='_blank'>From Despair to Where</Link>. I've also written and illustrated a children's book called The Tiniest of Trolls.</p>
        </div>
      </section>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 my-10">
            <Image
                src="/Motor-Girl.png"
                alt="Graphic design image of a girl in a motorcycle helmet and leathers"
                width={400}
                height={400}
                className="w-full h-[16vh] object-cover rounded"
              />
              <Image
                src="/Apple-Kiss.png"
                alt="Graphic design image of an apple with a conceptual kiss in the shadows"
                width={400}
                height={400}
                className="w-full h-[16vh] object-cover rounded"
              />
              <Image
                src="/Orange.png"
                alt="Graphic design of an orange with bright colours"
                width={400}
                height={400}
                className="w-full h-[16vh] object-cover rounded"
              />
                         <Link href="https://heyzine.com/flip-book/31161f483d.html" target='_blank'>
              <Image
                src="/Timothy-Troll.png"
                alt="Picture of Timothy Troll the lead character of children's book The Tiniest of Trolls"
                width={400}
                height={400}
                className="w-full h-[16vh] object-contain rounded"
                />
            </Link>
            <Link href="https://www.amazon.co.uk/Despair-Where-Oliver-Smith/dp/1527262065/" target='_blank'>
              <Image
                src="/from-despair-to-where.png"
                alt="Picture of Timothy Troll the lead character of children's book The Tiniest of Trolls"
                width={400}
                height={400}
                className="w-full h-[16vh] object-contain rounded"
                />
            </Link>
          </div>
      <BottomNavigation />
    </main>
  );
}