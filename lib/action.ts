"use server"

import { client, sanityFetch } from "@/sanity/lib/client";
import { ActionResponse} from "@/types";
import { NewsletterType, newsletter } from "@/lib/utils"
import { SanityDocument } from "next-sanity";
import {createTransport} from "nodemailer"
import { urlFor } from "@/sanity/lib/image";
function generateTemplate(data: SanityDocument){
    const { heading,slug,datum, image, description } = data;
    const articleUrl = `https://blog.adamhitzger.com/${slug?.current || ""}`
    const imageUrl = urlFor(image)
    const formattedDate = new Date(datum).toLocaleDateString("cs-CZ", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      return `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Green Newsletter Blog</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #e9f5ec;
      padding: 40px;
      margin: 0;
    }

    .newsletter-section {
      background-color: #ffffff;
      max-width: 900px;
      margin: 0 auto;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 128, 0, 0.1);
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }

    .newsletter-text {
      flex: 1 1 300px;
    }

    .newsletter-text h2 {
      font-size: 24px;
      margin-bottom: 8px;
      color: #006400; /* dark green */
    }

    .newsletter-text .date {
      font-size: 14px;
      color: #4caf50; /* light green */
      margin-bottom: 8px;
    }

    .newsletter-text .link {
      display: inline-block;
      margin-bottom: 12px;
      color: #2e7d32; /* medium green */
      text-decoration: none;
      font-weight: bold;
    }

    .newsletter-text .link:hover {
      text-decoration: underline;
    }

    .newsletter-text p {
      color: #333;
      line-height: 1.6;
    }

    .newsletter-image {
      flex: 1 1 300px;
    }

    .newsletter-image img {
      max-width: 100%;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 128, 0, 0.1);
    }
  </style>
</head>
<body>

  <section class="newsletter-section">
    <!-- Left Side: Text -->
    <div class="newsletter-text">
      <h2>${heading}</h2>
      <div class="date">Published on ${formattedDate}</div>
      <a href="${articleUrl}" class="link">Read Full Newsletter →</a>
      <p>
        ${description}
      </p>
    </div>

    <!-- Right Side: Image -->
    <div class="newsletter-image">
      <img src="${imageUrl}" alt="${heading}" />
    </div>
  </section>

</body>
</html>
      `
}

export async function sendMail(data: SanityDocument){
    
    const emails = await sanityFetch<NewsletterType[]>({query: "*[_type == 'newsletter']{ email}"})
    const transporter = createTransport({
        service: "gmail",
        auth: {
         user: process.env.FROM_EMAIL,
         pass: process.env.FROM_EMAIL_PASSWORD,
        }
       });
    const content = generateTemplate(data)
    try {
        for(let i =0; i<emails.length; i++){
            const send = await transporter.sendMail({
                from: "Adam Hitzger",
                subject: "New article on the web",
                to: emails[i].email,
                html: content,
            }) 
            if (send.rejected && send.rejected.length > 0) {
                console.error(`Email to ${emails[i]} was rejected, stopping send process`)
              }
        }
    }catch(error){
        console.log("Error while sending mails: ", error)
    }
}


export async function saveEmail(prevState: ActionResponse<NewsletterType>, formData: FormData): Promise<ActionResponse<NewsletterType>>{
    const rawData = {
        email: formData.get("email") as string
    }

    const {success, data, error} = newsletter.safeParse(rawData);

    if(!success){
        return{
            submitted: true,
            success: false,
            message: "You ve entered wrong email format!",
            inputs: data,
            errors: error.flatten().fieldErrors
        }
    }

    const newEmail = {
        _type: "newsletter",
        email: data.email
    }

    const result = await client.create(newEmail);
    if(!result._id){
        return{
            submitted: true,
            success: false,
            message: "Problem while saving email!",
            inputs: data,
        }
    }
    return{
        submitted: true,
        success: true,
        message: "Your email address were saved!",
    }
}