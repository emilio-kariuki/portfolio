import { About } from "./about";
import { Footer } from "./footer";
import { Introduction } from "./introduction";
import { Skills } from "./skills";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#0C1927]">
        <Introduction />
        <About />
        <Skills />
        <Footer />
    </main>
  );
}