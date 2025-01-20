import "@/app/components/CtaButton/CtaButton.css";
import Image from "next/image";
import Link from "next/link";
export default function CtaButton({link,children}:any) {
  return (
    <Link href={link} className="cta-button-under">
      <div className="right-arrow-background">
        
        <Image src="/right-arrow.svg" alt="" width={21} height={21} />
      </div>
      <div className="cta-text">{children}</div>
    </Link>
  );
}
