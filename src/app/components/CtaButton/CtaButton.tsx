import "@/app/components/CtaButton/CtaButton.css";
import Image from "next/image";
import Link from "next/link";

interface CtaButtonProps{
    link: string,
    children: string
}

export default function CtaButton({link,children}: CtaButtonProps) {
  return (
    <Link scroll={true} href={link} className="cta-button-under">
      <div className="right-arrow-background">
        
        <Image src="/right-arrow.svg" alt="" width={21} height={21} />
      </div>
      <div className="cta-text">{children}</div>
    </Link>
  );
}
