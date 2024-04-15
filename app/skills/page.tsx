import OjCodesLogo from "@/components/ojcodes-logo";
import BottomNavigation from "@/components/bottom-navigation";
import HireMeButton from "@/components/hire-me-button";
import { Metadata } from "next";
import MobileNavigation from "@/components/MobileNavigation";

export const metadata: Metadata = {
  title: "Software Developer Skills",
  description: "I have both development and business experience and can be an asset to your business. Check out my software engineering skills.",
};

export default function Skills() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-12 ">
      <header className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <HireMeButton/>
        <MobileNavigation/>
        <OjCodesLogo/>
      </header>
      <section className="max-w-screen-lg grid gap-12 grid-cols-1 md:grid-cols-2 relative flex place-items-start before:absolute before:h-[300px] before:w-full sm:before:w-[480px] pt-10 pb-10 sm:py-10">
        <div>
          <h1 className="text-3xl mb-4 sm:text-5xl text-left font-black">I have a wide range of <span className="text-teal-500">skills</span> and a wealth of business <span className="text-teal-500">experience</span></h1>
          <p className="mb-4 text-lg">Having worked for technology start-ups, fast-fashion companies and blue-chip organisations I have over 25 years&apos; experience for you to use. Prior to software engineering, I was in marketing and business development and with this experience I can help bridge user and developer communication.</p>
          <p className="mb-4 text-lg">I am a full-stack developer comfortable with both backend and front-end development. My software development skills are based on industry standards and readable code so that any coders further down the line can understand and build upon my code.</p>
        </div>
        <section className="text-left">
          <h2 className="text-3xl font-black mb-4">Skills</h2>
          <h3 className="text-2xl font-bold mb-2">Languages</h3>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">JavaScript</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">TypeScript</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">SQL</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Python</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">C#</p>
          </span>
          <h3 className="text-2xl font-bold mt-4 mb-2">Backend</h3>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">HTTP Server</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Express</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">MongoDB</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">PostgreSQL</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">SuperTest</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Jest</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Error Handling</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">CI/CD</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Axios</p>
          </span>
          <h3 className="text-2xl font-bold mt-4 mb-2">Front-End</h3>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">React</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">React Native</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">NextJS</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">HTML</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">CSS</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">GraphQL</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Figma</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Adobe Creative Cloud</p>
          </span>
          <h3 className="text-2xl font-bold mb-2 mt-4">Development Principles</h3>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">OOP</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Functional Programming</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">Agile</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">TDD</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">MVC Design Patterns</p>
          </span>
          <span className="inline-block me-2 mb-2 px-4 bg-teal-500 text-black rounded-full">
            <p className="font-bold text-center">System Design</p>
          </span>
        </section>
      </section>
      <BottomNavigation />
  </main>
  );
}
