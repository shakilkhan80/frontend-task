import Banner from "@/app/components/Banner/banner";
import Check from "@/app/components/Check/check";
import Contact from "@/app/components/Contact/contact";
import Do from "@/app/components/What_do/do";
import Footer from "./components/Footer/footer";
export default function Home() {
  return (
    <div>
      <Banner />
      <Do />
      <Check />
      <Contact />
      <Footer />
    </div>
  );
}
