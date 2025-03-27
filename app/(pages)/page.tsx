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
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga numquam in quasi velit veniam nesciunt similique cum hic quibusdam quidem quaerat, sit magnam delectus repellendus ut dolorum sed ratione?" 
           img="/me.jpeg" 
           alt="Adam Hitzger - blog about web programming - Next.j, SQL, R3F and more..."
           />
           <Arcticles articles={articles}/>
           </>
  );
}
