import { About } from "./about";
import { Introduction } from "./introduction";
import { Skills } from "./skills";

export default function Home() {
  return (
    <main className="h-full w-full ">
        <Introduction />
        <About />
        <Skills />
    </main>
  );
}