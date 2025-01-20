import Image from "next/image"
import CtaButton from "../CtaButton/CtaButton"
import "@/app/components/SocialProof/SocialProof.css"
export default function SocialProof(){
    return (
        <section className="social-wrapper section-margins web-margins">
            <h5 className="section-header social-header" >Zobacz co piszą o nas inni</h5>
            <Image 
                src="/social-proof.webp"
                alt=""
                width={590}
                height={500}
            />
            <CtaButton link={"/kontakt"} >Dołącz do zadowolonych klientów</CtaButton>
        </section>
    )
}