import About from "@/components/About";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Main from "@/components/Main";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Newsletter />
      <Services />
      <Feedback />
      <Contact />
    </>
  );
}
