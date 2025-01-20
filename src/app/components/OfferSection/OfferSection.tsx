import OfferComponent from "../OfferComponent/OfferComponet"
import "./OfferSection.css"
export default function OfferSection(){

    return(
        <div className="web-margins">
            <h6 style={{marginTop: "5%"}} className="section-header">Nasza oferta</h6>
            <p className="offer-section-paragraph">Chcesz zaoszczędzić? Szukasz nowoczesnych rozwiązań typu smart home? A może zależy ci na środowisku? U nas znajdziesz bogactwo różnorodnych produktów, które obniżą twoje rachunki za prąd i wpłyną na poprawę środowiska.</p>
            <div className="offer-section-wrapper">
                <OfferComponent img="/solar.webp" title="Panele fotowoltaiczne" text="Nowoczesne i wydajne systemy fotowoltaiczne, które pozwalają zamieniać energię słoneczną w oszczędności dla Twojego domu lub firmy."/>
                <OfferComponent img="/inwerter.webp" title="Inwertery" text="Zaawansowane inwertery, które zapewniają maksymalną efektywność i niezawodność w przekształcaniu energii słonecznej na energię elektryczną."/>
                <OfferComponent img="/heat-pump.webp" title="Pompy ciepła" text="Ekologiczne i oszczędne systemy grzewcze, wykorzystujące energię z otoczenia do ogrzewania Twojego domu przez cały rok."/>
                <OfferComponent img="/smart-home.webp" title="Smart home" text="Inteligentne rozwiązania, które automatyzują i optymalizują działanie Twojego domu, podnosząc komfort i zmniejszając zużycie energii."/>
            </div>
        </div>
    )
}