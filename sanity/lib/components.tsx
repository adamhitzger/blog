import Link from "next/link";
import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { CodeBlock } from "@/components/code-block";
import { urlFor } from "./image";

export const components: Partial<PortableTextComponents> = {
    list: {
        bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
        number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,
    },
    block: {
        h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-bold">{children}</h4>,
        h5: ({ children }) => <h5 className="font-bold">{children}</h5>,
        h6: ({ children }) => <h6 className="font-bold">{children}</h6>,
        blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,
    },
    marks: {
        em: ({ children }) => <em className=" font-semibold">{children}</em>,
        strong: ({ children }) => <span className=" font-bold">{children}</span>,
        u: ({ children }) => <span className="text-underline">{children}</span>,
        strike: ({ children }) => <s className=" font-bold">{children}</s>,
        link: ({ children, value }) => {
            const ytb: boolean = value.href.startsWith("https://www.youtube.com/embed/");
            if (ytb) return <iframe src={value?.href} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mx-auto h-96"></iframe>
            else return <Link href={value?.href} className="underline text-secondary-foreground">{children}</Link>
        }
    },
    types: {
        image: ({ value }: { value: any }) => (
          <Image
          width={256}
          height={256}
            src={urlFor(value)}
            alt={value}
            className="rounded-lg w-96 mx-auto my-5"
          />
        ),
       code: ({value}: {value: any}) => (
            <CodeBlock
                language={value.language}
                filename={"example."+value.language}
                highlightLines={value.highlightedLines}
                code={value.code}
            />
       )
      },
}