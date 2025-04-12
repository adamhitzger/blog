import { sendMail } from "@/lib/action"
import { EnvelopeIcon } from "@sanity/icons";
import { DocumentActionProps } from "sanity";

export function sendMails({ draft, published, onComplete }: DocumentActionProps) {

  const handleAction = async () => {
    const documentData = draft || published
    if (!documentData) {
      alert("Žádná data nejsou k dispozici")
      onComplete()
      return
    }
    try {
      const response = await sendMail(documentData)
      console.log(response)
    } catch (error) {
      console.error("Error v akci sendMails(): ", error)
      onComplete()
    }
  }

  return {
    label: "Rozeslat newsletter",
    onHandle: handleAction,
    icon: EnvelopeIcon,
  }
}