"use client"

import Image from "next/image";
import Link from "next/link";
import "./OfferComponent.css";
import { useState } from "react";

interface OfferProps {
  img: string;
  title: string;
  text: string;
}

export default function OfferComponent({ img, title, text }: OfferProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="offer-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`on-hover-text ${hover ? "visible" : ""}`}>
        <div className="hover-title">{title}</div>
        <p>{text}</p>
        <div>
          <Link href="/kontakt" className="offer-contact">
            Skontaktuj się
          </Link>
        </div>
      </div>
      <div className={`offer-title ${hover ? "hidden" : ""}`}>
        {title} <Image src={"/right2.svg"} alt="" width={30} height={30} />
      </div>
      <Image className="offer-image" src={img} alt="" width={520} height={300} />
    </div>
  );
}
