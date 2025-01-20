import LowTextBox from "../LowTextBox/LowTextBox"
import "@/app/components/ThreeImages/ThreeImages.css"
import Link from "next/link"
export default function ThreeImages(){
    return (
        <div className="web-margins ">
            <h4 className="section-header three-header" style={{marginBottom: "5%"}}>Zacznij inwestować z najlepszymi</h4>
            <div className="three-images-wrapper ">
            
                <LowTextBox title="Zdobądź dotacje na energie odnawialną" text="Pomożemy Ci przejść przez cały proces aplikacji, doradzimy, które programy wsparcia są najbardziej odpowiednie i poprowadzimy Cię przez formalności." img="/eu-flag.webp"/>
                <LowTextBox title="Zainwestuj teraz i płać później – raty 0%!" text="Dzięki naszej ofercie rat 0% możesz rozłożyć płatność na dogodne raty, nie ponosząc dodatkowych kosztów!" img="/saving.webp"/>
                <LowTextBox title="Naucz się korzystać z naszych technologii" text="Oferujemy kompleksowe kursy, które nauczą Cię, jak efektywnie korzystać z paneli fotowoltaicznych, pomp ciepła, inwerterów i systemów smart home." img="/courses.webp"/>
            </div>
            <div className="center">
                <Link href="/kontakt" className="three-button">Skontaktuj się</Link>
            </div>
        </div>
    )
}