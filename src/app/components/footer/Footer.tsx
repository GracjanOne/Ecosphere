import "@/app/components/footer/Footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer style={{marginTop: "50px"}} className="web-margins">
      <div id="line"></div>
      <div className="footer-wrapper">
          <div className="footer-logo">ecosphere</div>
          <div className="footer-links">
            <Link href="/#">Informacje prawne</Link>
            <Link href="/#">Design & Development</Link>
            <Link href="/#">Źródła zdjęć</Link>
          </div>
      </div>
    </footer>
  );
}
