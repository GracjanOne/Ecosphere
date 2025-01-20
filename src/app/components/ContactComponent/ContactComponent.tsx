import "@/app/components/ContactComponent/ContactComponent.css"
import Image from "next/image"

interface Contact{
    src: string,
    title: string,
    sub: string,
    contact: string,
}
export default function ContactComponent({src, title, sub, contact}: Contact){
    return (
        <div className="contact-way-wrapper">
                <Image 
                    src={src}
                    alt=""
                    width={48}
                    height={48}
                />
                <div className="contact-way-title">{title}</div>
                <div>{sub}</div>
                <div>{contact}</div>
        </div>
    )
}