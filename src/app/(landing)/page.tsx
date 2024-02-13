import { About } from "./about";
import { Footer } from "./footer";
import { Introduction } from "./introduction";
import { Skills } from "./skills";

export default function Home() {
  return (
    <main className="light:bg-[#FDFCFA] h-full w-full px-[170px]">
      <Introduction />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
