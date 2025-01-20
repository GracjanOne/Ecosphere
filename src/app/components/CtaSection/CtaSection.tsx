import "@/app/components/CtaSection/CtaSection.css"
import Link from "next/link"
export default function CtaSection(){
    return(
        <section className="section-margins web-margins">
            <h6 className="section-header cta-header">Zainwestuj w przyszłość z najlepszymi!</h6>
            <p className="cta-paragraph">Skontaktuj się z nami aby uzyskać darmowy audyt oraz wycenę</p>
            <div className="center">
                <Link className="cta-section-button" href={"/kontakt"}>Skontaktuj się</Link>
            </div>
        </section>
    )
}