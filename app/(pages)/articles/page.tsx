import Arcticles from "@/components/articles";
import { sanityFetch } from "@/sanity/lib/client";
import { getAllArticles } from "@/sanity/lib/queries";
import { Cards } from "@/types";

export default async function ArticlesPage() {
  const articles = await sanityFetch<Cards>({query: getAllArticles});
  console.log(articles)
  return (
    <>
      <Arcticles articles={articles}/>
    </>
  );
}