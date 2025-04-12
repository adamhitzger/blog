"use client";
import Link from "next/link";


const year = new Date().getFullYear();

export default function Footer(){
    
    return(
        <footer className="flex flex-col w-full space-y-4">
            <div className="text-2xl font-bold flex flex-col sm:flex-row w-full justify-between">
            <Link href={"mailto:adam.hitzger@icloud.com"}>adam.<span className="text-green-700">hitzger</span>@icloud.com</Link>
            <Link href={"https://github.com/adamhitzger"} target="_blank">Git<span className="text-green-700">hub</span></Link>
            <Link href={"https://www.linkedin.com/in/adam-hitzger-aa518622b/?originalSubdomain=cz"} target="_blank">Linked<span className="text-green-700">In</span></Link>
            <Link href={"https://adamhitzger.com"} target="_blank">Dev <span className="text-green-700">page</span></Link>
            </div>
            <span className="text-center font-medium text-lg">{year} Adam Hitzger</span>
        </footer>
    )
}

