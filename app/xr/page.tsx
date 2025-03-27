import Experience, { XRArticles } from "@/components/xr/xrComp";
import { sanityFetch } from "@/sanity/lib/client";
import { getArticles } from "@/sanity/lib/queries";
import { Cards } from "@/types";
import { XRHeader } from "@/components/xr/xrComp";

export default async function XRPage(){
    const articles = await sanityFetch<Cards>({query: getArticles});
    console.log(articles)
    return(
        <Experience >
            
           <XRHeader heading="Adam's blog" 
                       text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga numquam in quasi velit veniam nesciunt similique cum hic quibusdam quidem quaerat, sit magnam delectus repellendus ut dolorum sed ratione?" 
                       img="/me.jpeg" />
<XRArticles articles={articles}/>
            </Experience>
    )
}