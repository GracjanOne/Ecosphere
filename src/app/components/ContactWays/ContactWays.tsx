import "@/app/components/ContactWays/ContactWays.css"
import ContactComponent from "../ContactComponent/ContactComponent"
export default function ContactWays(){
    return (
        <>
        <div className="contact-ways-header">Inne formy kontaktu</div>
         <div className="contact-ways-wrapper">
            
            <ContactComponent 
                src="/mail.svg"
                title="Email"
                sub="Skontaktuj się z nami, jeśli masz jakiekolwiek pytania lub wątpliwości."
                contact="info@ecosphere.pl"
            />
            <ContactComponent 
                src="/phone.svg"
                title="Telefon"
                sub="Zadzwoń do nas, jeśli potrzebujesz pomocy lub informacji."
                contact="+48 000 000 000"
            />
            <ContactComponent 
                src="/map.svg"
                title="Biuro"
                sub="Zapraszamy do odwiedzenia naszego biura w Warszawie."
                contact="ul. Słoneczna 3, 00-001 Warszawa"
            />
    </div>
        </>
       
    )
}