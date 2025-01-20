import HeroSection from "./components/hero/HeroSection";
import LeftImage from "./components/LeftImage/LeftImage";
export default function Home() {
  return (
   <div>
    <HeroSection />
    <LeftImage title="Oszczędzaj nie tylko na prądzie" p1="Po instalacji naszych technologii czekają na ciebie również liczne zniżki podatkowe. Programy wsparcia dla odnawialnych źródeł energii, takie jak ulga termomodernizacyjna czy dopłaty rządowe, sprawiają, że instalacja naszych systemów staje się jeszcze bardziej opłacalna. " p2="Nie tylko zmniejszysz swoje rachunki, ale również odzyskasz część poniesionych wydatków dzięki preferencjom podatkowym. To podwójna korzyść, której nie warto przegapić!"
    button="Zobacz jakie zniżki możesz odebrać"
    img="/saving-img.webp" imgWidth={600} imgHeight={680} isRight={false}/>
    <br /><br /><br /><br />
    
   </div>
  );
}
