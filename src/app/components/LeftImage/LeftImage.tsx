import CtaButton from "../CtaButton/CtaButton";
import Image from "next/image";
import "@/app/components/LeftImage/LeftImage.css"
interface LeftImageProps {
  title: string;
  p1: string;
  p2: string;
  button: string;
  img: string;
  imgWidth: number;
  imgHeight: number;
  isRight: boolean;
}

export default function LeftImage({
  title,
  p1,
  p2,
  button,
  img,
  imgWidth,
  imgHeight,
  isRight,
}: LeftImageProps) {
  return (
    <div className="web-margins left-image-wrapper section-margins" style={isRight ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
      <div className="left-image-object">
        <Image  src={img} alt="" width={imgWidth} height={imgHeight} />
      </div>
      <div className="image-right-text">
        <h3 className="section-header">{title}</h3>
        <div className="image-paragraphs">
            <p>{p1}</p>
            <p>{p2}</p>
        </div>
        <CtaButton link={"/kontakt"}>{button}</CtaButton>
      </div>
    </div>
  );
}
