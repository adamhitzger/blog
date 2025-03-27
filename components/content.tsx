"use client"

import { components } from "@/sanity/lib/components"
import { PortableText } from "next-sanity"

export default function Content({content}: {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any}){
    return(
        <article className="w-full text-lg">
            <PortableText value={content} components={components}/>
        </article>
    )
}