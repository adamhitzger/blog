import * as z from "zod"

export interface Card {
    heading: string;
    slug: string;
    datum: Date;
    photo: string;
    description: string;
}

export interface Article {
    heading: string;
    slug: string;
    datum: Date;
    photo: string;
    description: string;
    keywords: Array<string>;
    content: any;
}

export interface ActionResponse<T> {
    success: boolean,
    submitted: boolean,
    message: string,
    inputs?: T,
    errors?: {
        [K in keyof T]?: string[]
    }
}

export type Cards = Array<Card>