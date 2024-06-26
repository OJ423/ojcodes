import HireMeButton from '@/components/hire-me-button';
import BottomNavigation from '../components/bottom-navigation'
import OjCodesLogo from "@/components/ojcodes-logo";
import MobileNavigation from '@/components/MobileNavigation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-12 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <HireMeButton />
        <MobileNavigation />
        <OjCodesLogo/>
      </div>

      <div className="text-3xl sm:text-4xl lg:text-6xl text-center sm:text-left font-black relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] pt-10 pb-10 sm:p-10">
        <h1>Hi, I&apos;m <span className="text-teal-500">Oliver</span>.<br />
        I like to <span className="text-teal-500">build</span> and <span className="text-teal-500">code</span>.<br />
        Got an idea and need help?<br />
        Talk to me.
        </h1>
      </div>
      <BottomNavigation />
    </main>
  );
}
