import Image from "next/image";
import "@/app/components/BoxImage/BoxImage.css"
import Link from "next/link";
export default function BoxImage() {
  return (
    <div className="web-margins box-wrapper section-margins">
      <div className="image-box">
        <Image src="/solar-panel.webp" alt="" width={550} height={730} />
      </div>
      <div className="text-box">
        <h3 className="section-header">Przestań wydawać fortunę na rachunki</h3>
        <div className="box-paragraphs">
            <p>Jeśli opłaty zmuszają cię aby sięgać coraz głębiej do portfela, zaufaj najnowszej technologii energetycznej i zmniejsz rachunki za prąd nawet o połowę. Dzięki naszym panelom fotowoltaicznym, inwerterom, pompom ciepła czy systemom smart home, możesz znacznie obniżyć koszty utrzymania swojego domu, jednocześnie dbając o środowisko. </p>
            <p>Nasze rozwiązania są nie tylko efektywne, ale także trwałe i łatwe w obsłudze. Zrób krok w kierunku przyszłości, oszczędzając pieniądze i korzystając z energii w bardziej zrównoważony sposób. Zacznij oszczędzać już dziś – inwestycja, która szybko się zwróci!</p>
        </div>
        <Link className="box-button" href="/kontakt">Zacznij oszczędzać</Link>
      </div>
    </div>
  );
}
