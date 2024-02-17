import { About } from "./about";
import { Footer } from "./footer";
import { Introduction } from "./introduction";
import { Skills } from "./skills";

export default function Home() {
  return (
    <main className="light:bg-[#FDFCFA] h-full w-full px-[15px] lg:px-[170px] md:px-[90px] py-10">
      <Introduction />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
