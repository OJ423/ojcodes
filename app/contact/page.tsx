import Form from '@/components/Form';
import MobileNavigation from '@/components/MobileNavigation';
import BottomNavigation from '@/components/bottom-navigation'
import HireMeButton from '@/components/hire-me-button';
import OjCodesLogo from "@/components/ojcodes-logo";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get in touch with me",
  description: "If you're looking for a software engineer for full time employment or on a freelance basis, get in touch with me.",
};

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-12 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <HireMeButton/>
        <MobileNavigation/>
        <OjCodesLogo/>
      </div>

      <div className="relative grid grid-cols-1 place-items-center pt-10 pb-4">
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center font-black'>Get in <span className="text-teal-500">Touch</span></h1>
      </div>
      <Form />
      <BottomNavigation />
    </main>
  );
}
