import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createXRStore} from "@react-three/xr"

export const xrStore = createXRStore()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
