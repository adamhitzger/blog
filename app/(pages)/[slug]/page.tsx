import { sanityFetch } from "@/sanity/lib/client"
import { getArticle } from "@/sanity/lib/queries"
import { Article } from "@/types"
import { Metadata } from "next";
import Header from "@/components/header";
import Content from "@/components/content";

export async function generateMetadata({params}:{params: Promise<{ slug: string}>}):Promise<Metadata> {
    const param = await params;
    const p: Article = await sanityFetch<Article>({ query: getArticle, params: param });

    return{
        title:"Adam Hitzger's blog - " + p.heading,
  icons: {
    icon: { url: "/favicon.ico"} 
    },
  applicationName: "Adam Hitzger's blog",
  generator: "Next.ts",
  authors: [{name: "Adam Hitzger"}],
  description: p.description,
  keywords: p.keywords,
  alternates: {
    canonical: "https://blog.adamhitzger.dev",
  },
  creator: "Adam Hitzger",
        publisher: "Adam Hitzger",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
          },
  openGraph: {
    title: "Adam Hitzger's blog - " + p.heading,
    description: p.description,
    url: "https://blog.adamhitzger.dev",
    siteName: "Adam Hitzger's blog",
    images: [
      {
        url: p.photo,
        width: 800,
        height: 600,
      }
    ],
    locale: "cs_CZ",
    type: "website",
  },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Adam Hitzger's blog",
      description: p.description,
      images: ["https://blog.adamhitzger.dev"],
    },
    }
}


export default async function SlugPage({params}: {params: Promise<{slug: string}>}){
    const param = await params
    const article = await sanityFetch<Article>({query: getArticle, params: param})
    console.log(article)
    return(
        <>
        <Header
          img={article.photo}
          text={article.description}
          heading={article.heading}
          alt={"Adam Hitzger's blog - " + article.description.slice(0,100)}
          date={article.datum}
        />
        <Content content={article.content}/>
        </>
    )
}