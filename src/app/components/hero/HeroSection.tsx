"use client"

import "@/app/components/hero/HeroSection.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function HeroSection() {
  const [innerWidth, setWidth] = useState<number>(600)
  useEffect(()=>{
    const width:number = window.innerWidth
    setWidth(width)
},[])

  return (
    <section>
      <div className="hero-wrapper">
        <div className="web-margins hero-text-wrapper">
          <h2 className="hero-header">
            Oszczędzaj więcej dzięki niższym kosztom{" "}
            <span className="hero-emphasis">energii!</span>
          </h2>
          <div className="subtitle">
            Skorzystaj z naszych nowoczesnych i ekologicznych technologii paneli
            fotowoltaicznych i zmniejsz zużycie prądu nawet o połowe.
          </div>
          <div className="center">
            <Link href="/kontakt" className="cta-button">
              Umów się na konsultację
            </Link>
          </div>
        </div>
        
        <Image className="solar-hero hero-desktop" src="/solar-hero.webp" alt="" width={1512} height={386}/>
        <Image className="solar-hero hero-mobile" src="/mobile-hero.webp" alt="" width={550} height={240}/>
      </div>
    </section>
  );
}
