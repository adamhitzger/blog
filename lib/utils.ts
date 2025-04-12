import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as z from "zod"
export const newsletter = z.object({
    email: z.string().email({message: "You entered wrong email format!"}).trim(),
})
export type NewsletterType = z.infer<typeof newsletter>

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
