"use client"

import "@/app/components/hero/HeroSection.css";
import Link from "next/link";
import { useEffect, useState } from "react";
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
        <img id="solar-hero" src={innerWidth > 660 ? "/solar-hero.webp" : "/mobile-hero.webp"} alt="" />
      </div>
    </section>
  );
}
