"use client";
import Image from "next/image";
import {motion} from "motion/react"
 export default function Header({heading, text, img, alt, date}: {heading: string, text: string, img: string, alt: string, date?: Date}){
    const space = heading.search(" ")
    const length = heading.length
    const headingOne = heading.slice(0, space);
    const headingTwo = heading.slice(space+1, length);
    return(
        <header className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
             initial={{opacity: 0, x: -500}}
             whileInView={{opacity: 1, x: 0}}
             exit={{opacity: 0, x: -500}}
             transition={{duration: 1}}
            className="flex flex-col items-start justify-center space-y-4">
                <h1 className="font-medium text-6xl">{headingOne} <span className="text-green-700">{headingTwo}</span></h1>
                <p className="text-justify text-xl">
                    {text}
                </p>
                {date && <span>{new Date(date).toDateString().replaceAll(" ",", ")}</span>}
            </motion.div>
            <motion.div
            initial={{opacity: 0, x: 500}}
            whileInView={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 500}}
            transition={{duration: 1}}
            className="flex flex-col items-center w-full justify-center space-y-4"
            >
            <Image
            src={img}
            alt={alt}
            width={384}
            height={384}
            className="rounded-3xl m-auto"
            />
        </motion.div>
        </header>
    )
 }

