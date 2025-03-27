import { sanityFetch } from "@/sanity/lib/client";
import { Cards, Card } from "@/types";
import { getAllArticles } from "@/sanity/lib/queries";
import { MetadataRoute } from "next";

type Route = {
    url: string;
    lastModified: string;
};

export const dynamic = "force-dynamic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl: string = "https://blog.adamhitzger.dev";
    const staticPages: Route[] = [
        "/",
        "/articles",
      ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString()
      }));
    const articlesPromise: Route[] = await sanityFetch<Cards>({query: getAllArticles}).then((articles) =>
        articles.map((a: Card) => ({
            url: `${baseUrl}/${a.slug}`,
            lastModified: new Date(a.datum).toISOString()
        }))
    );
    let fetchedRoutes: Route[] = [];
    try{
        fetchedRoutes = (await Promise.all([articlesPromise])).flat();

    }catch(error){
        throw JSON.stringify(error)
    } 
    return [...staticPages, ...fetchedRoutes];
}