import { defineType, defineField } from "sanity";

export const blogSchema = defineType({
    title: "Články",
    name: "article",
    type: "document",
    fields: [
        defineField({
            type: "string",
            title: "Nadpis",
            name: "heading",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "heading",
            }
        }),
        defineField({
            name: "datum",
            type: "date",
            title: "Datum"
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Obrázek",
        }),
        defineField({
            name: "description",
            type: "string",
            title: "Popis",
            validation: (rule) => rule.max(150)
        }),
        defineField({
            name: "keywords",
            type: "array",
            title: "Klíčová slova",
            of: [
                {type: "string"}
            ]
        }),
        defineField({
            name: "content",
            title: "Obsah",
            type: "array",
            of: [
                {type: "block"},
                {type: "image"},
                {type: "code"}
            ]
        })
    ],
})