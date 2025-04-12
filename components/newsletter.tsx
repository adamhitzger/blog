"use client"

import { saveEmail } from "@/lib/action"
import { ActionResponse } from "@/types"
import { NewsletterType } from "@/lib/utils"
import { useActionState, useEffect } from "react"
import { toast } from "react-hot-toast"
import {Loader2} from "lucide-react"
const sendState: ActionResponse<NewsletterType> = {
    message: "",
    submitted: false,
    success: false,
}

export default function Newsletter(){
    const [state, action, isPending] = useActionState(saveEmail, sendState)
    useEffect(() =>{
        if(state.submitted && !state.success){
            toast.error(state.message)
        }
        if(state.submitted && state.success){
          toast.success(state.message)
      }
      }, [state.submitted, state.success, state.message])
    return(
        <section className="w-full flex flex-row justify-center minh-h-screen">
             <form action={action} className="w-full sm:w-2/3 lg:w-1/2 bg-black text-white rounded-xl p-4 flex flex-col space-y-2 items-center">
                    <h2 className="text-xl font-semibold">Subscribe to my newsletter !</h2>
                    <p className="text-base font-medium text-center">and be updated with lastest libraries. Enter your email address!</p>
                    <input 
                    type="text" 
                    name="email"
                    className="border-white ring-white text-black p-2 rounded-xl bg-white" 
                    placeholder="Enter email"
                    defaultValue={state?.inputs?.email}
                    disabled={isPending}
                    />
                    <button
                    type="submit"
                    disabled={isPending}
              className="px-4 py-2 rounded-xl text-black bg-white text-base font-semibold"
            >
             {isPending ? <Loader2 className="animate-spin"/> : "Home"}
            </button>
             </form>
        </section>
    )
}