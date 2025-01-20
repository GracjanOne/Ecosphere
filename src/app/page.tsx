import HeroSection from "./components/hero/HeroSection";
import LeftImage from "./components/LeftImage/LeftImage";
import BoxImage from "./components/BoxImage/BoxImage";
import ThreeImages from "./components/ThreeImages/ThreeImages";
import SocialProof from "./components/SocialProof/SocialProof";
import FAQSection from "./components/FAQSection/FAQSection";
import CtaSection from "./components/CtaSection/CtaSection";
export default function Home() {
  return (
   <div>
    <HeroSection />
    <LeftImage title="Oszczędzaj nie tylko na prądzie" p1="Po instalacji naszych technologii czekają na ciebie również liczne zniżki podatkowe. Programy wsparcia dla odnawialnych źródeł energii, takie jak ulga termomodernizacyjna czy dopłaty rządowe, sprawiają, że instalacja naszych systemów staje się jeszcze bardziej opłacalna. " p2="Nie tylko zmniejszysz swoje rachunki, ale również odzyskasz część poniesionych wydatków dzięki preferencjom podatkowym. To podwójna korzyść, której nie warto przegapić!"
    button="Zobacz jakie zniżki możesz odebrać"
    img="/saving-img.webp" imgWidth={600} imgHeight={680} isRight={false}/>
    <BoxImage />
    <LeftImage title="Pieniądze to nie wszystko, oszczędź środowisko!" p1="Korzystając z naszych nowoczesnych technologii, takich jak panele fotowoltaiczne czy pompy ciepła, nie tylko oszczędzasz na rachunkach, ale także zmniejszasz swój ślad węglowy. 
 " p2="Każda kilowatogodzina wyprodukowana z odnawialnych źródeł energii to mniej emisji CO₂ do atmosfery. Wybierając ekologiczne rozwiązania, przyczyniasz się do ochrony naszej planety i budujesz lepszą przyszłość dla kolejnych pokoleń. Zacznij działać dziś – dla siebie i dla środowiska!"
    button="Oszczędź środowisko"
    img="/eco.webp" imgWidth={550} imgHeight={710} isRight={true}/>
    <ThreeImages />
    <SocialProof />
    <FAQSection />
    <CtaSection />
   </div>
  );
}
