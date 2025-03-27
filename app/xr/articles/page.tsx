import Experience from "@/components/xr/xrComp";
import { sanityFetch } from "@/sanity/lib/client";
import { getAllArticles } from "@/sanity/lib/queries";
import { Cards } from "@/types";
import { XRArticles } from "@/components/xr/xrComp";

export default async function XRArticlesPage(){
    const articles = await sanityFetch<Cards>({query: getAllArticles});
      console.log(articles)
      return(
        <Experience>
            <XRArticles articles={articles}/>
        </Experience>
      )
}