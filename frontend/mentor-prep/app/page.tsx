import CardsCarousel from "../components/CardsCarousel/CardsCarousel";
import { EmailBanner } from "../components/EmailBanner/EmailBanner";
import { FooterSocial } from "../components/FooterSocial/FooterSocial";
import { HeroBullets } from "../components/HeroBullets/HeroBullets";

export default function HomePage() {
  return <>
  <HeroBullets/>
  <CardsCarousel/>
  <EmailBanner/>
  <FooterSocial/>
  </>;
}
