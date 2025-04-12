import { sanityFetch } from "@/sanity/lib/client";
import { getArticles } from "@/sanity/lib/queries";
import { Cards } from "@/types";
import Arcticles from "@/components/articles";
import Header from "@/components/header";

export default async function Home() {
  const articles = await sanityFetch<Cards>({query: getArticles});
  console.log(articles)
  return (
    <>
            <Header 
           heading="Adam's blog" 
           text="Hello 👋, my name is Adam Hitzger ! I am interested in web development, databases and more from programming world. Here on my blog, I write about my experiences a libraries/frameworks that I am interested in."
           img="/me.jpeg" 
           alt="Adam Hitzger - blog about web programming - Next.j, SQL, R3F and more..."
           />
           <Arcticles articles={articles}/>
           </>
  );
}
