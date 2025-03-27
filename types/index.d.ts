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

export type Cards = Array<Card>