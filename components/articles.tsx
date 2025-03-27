"use client";

import { Card, Cards } from "@/types";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
 import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from "motion/react"

export default function Arcticles({articles}: {articles: Cards}){
  const pathname = usePathname()
    return(
        <section className="w-full flex items-center flex-col">
            <motion.h2 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 2}}
              className="font-medium text-5xl self-end"
            >
              <span
              className="text-green-700 mx-4">
                {pathname !== "/" ?"All": "Newest"} 
                </span>
                Articles
                </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 ">
                {articles.map((a: Card,i: number) => (
                    <CardContainer duration={i>0 ? i+0.4 :1} className="bg-[#DEDDDD]/50  rounded-3xl group-hover/card:shadow-xl" key={i}>
                    <CardBody className="backdrop-blur-2xl relative group/card   border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6">
                      <CardItem
                        translateZ="150"
                        translateX={-20}
                        className="text-2xl font-bold text-black "
                      >
                        {a.heading}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        translateY={20}
                        className="text-neutral-500 text-sm max-w-sm mt-2"
                      >
                        {a.description}
                      </CardItem>
                      <CardItem
                        translateZ="100"
                        translateY={20}
                        className="w-full mt-4"
                      >
                        <Image
                          src={a.photo
                          }
                          height="812"
                          width="812"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        className="w-full mt-4"
                      >
                        <span className="font-medium text-neutral-500">{new Date(a.datum).toDateString().replaceAll(" ",", ")}</span>
                      </CardItem>
                      <div className="flex justify-end items-center">
                        <Link href={`/${a.slug}`}>
                        <CardItem
                          translateZ={20}
                          translateX={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black  text-white text-base font-semibold"
                        >
                          Full Article
                        </CardItem>
                        </Link>
                      </div>
                    </CardBody>
                  </CardContainer>
                ))}
            </div>

            {pathname === "/" ? 
              <Link href={`/articles`}>
              <button
                className="px-4 py-2 rounded-xl bg-black  text-white text-base font-semibold"
              >
               More articles
              </button>
              </Link>
            : <Link href={`/`}>
            <button
              className="px-4 py-2 rounded-xl bg-black  text-white text-base font-semibold"
            >
             Home
            </button>
            </Link>}
        </section>
    )
}