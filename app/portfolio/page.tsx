import BottomNavigation from '@/components/bottom-navigation'
import HireMeButton from '@/components/hire-me-button';
import OjCodesLogo from "@/components/ojcodes-logo";
import PortfolioCarousel from '@/components/portfolio-carousel';

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-12 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <HireMeButton/>
        <OjCodesLogo/>
      </div>

      <div className="text-3xl sm:text-4xl lg:text-6xl text-center sm:text-left font-black relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] pt-10 pb-10 sm:p-10">
        <div>
          <h1>Here is my <span className="text-teal-500">Portfolio</span></h1>
          <PortfolioCarousel/>
        </div>
      </div>
      <BottomNavigation />
    </main>
  );
}