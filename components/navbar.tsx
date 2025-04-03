"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from "motion/react"

export default function Navbar(){
    const pathname = usePathname()
    return(
        <motion.nav 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1.5}}
        className="flex flex-row-reverse justify-between items-center font-bold text-4xl"
        >       
                <Link href={"/"}>
                    <h1>
                        <span className="text-green-700">
                            blog
                            </span>
                        .adamhitzger
                </h1>
                </Link>
        </motion.nav>
    )
}


