import React from "react";
import { images } from "./constants";
import left from "../public/left.svg";
import right from "../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";
import { IconContext } from "react-icons";
import Link from "next/link";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="flex h-[60vh] sm:h-[40vh] md:h-[30vh] lg:h-[45vh] place-items-start lg:place-items-center w-full relative md:rounded-tr-3xl md:rounded-br-3xl">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-auto py-8 lg:py-0 px-0 lg:px-12 px-2 text-left flex flex-col"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 0.5,
              x: { duration: 0.5 },
            }}
            className="w-full"
          >
            <div className="pb-4 text-2xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-auto">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <div className="flex text-xl lg:text-lg mt-8 absolute bottom-4 left-4 w-full justify-left items-center">
          {elem.repo.length > 0 ?
            <div className="flex-initial w-12">
              <IconContext.Provider value={{size:"2em"}}>
                <Link href={elem.repo} target="_blank">
                  <AiFillGithub aria-label="link to GitHub example"/>
                </Link>
              </IconContext.Provider>
            </div>
            : null
            }
            {elem.example.length > 0 ? 
            <div className="flex-initial w-12">
            <IconContext.Provider value={{size:"2em"}}>
                <Link href={elem.example} target="_blank">
                  <AiFillChrome aria-label="link to portfolio example" />
                </Link>
              </IconContext.Provider>
            </div>
            :
            null
          }
          </div>
          <div className="absolute md:bottom-1 bottom-4 right-4 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="Scroll left" className="dark:invert" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="Scroll Right" className="dark:invert" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;