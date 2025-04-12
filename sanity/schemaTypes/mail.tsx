import { defineType, defineField } from "sanity";

export const emailSchema = defineType({
    title: "Emaily",
    name: "newsletter",
    type: "document",
    fields: [
        defineField({
            type: "string",
            title: "Email",
            name: "email",
        })
    ],
})