import Image from "next/image"
import "@/app/components/LowTextBox/LowTextBox.css"
interface LowTextProps{
    title: string,
    img: string,
    text: string,
}

export default function LowTextBox({title, img, text}: LowTextProps){
    return(
        <div className="low-text-wrapper">
            <Image 
                src={img}
                alt=""
                width={350}
                height={245}
            />
            <div className="low-text-title">{title}</div>
            <p>{text}</p>
        </div>
    )
}