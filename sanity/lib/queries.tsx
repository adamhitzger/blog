import { groq } from "next-sanity";

export const getArticles = groq`*[_type == 'article'] | order(_createdAt desc)[0..3]{
    heading,
    "slug": slug.current,
    "photo":image.asset->url,
    datum,
    description,
}`

export const getAllArticles = groq`*[_type == 'article'] | order(_createdAt desc){
    heading,
    "slug": slug.current,
    "photo":image.asset->url,
    datum,
    description,
}`

export const getArticle = groq`*[_type == 'article' && slug.current == $slug][0]{
    heading,
    "slug": slug.current,
    "photo": image.asset->url,
    datum,
    content,
    keywords,
    description,
}`