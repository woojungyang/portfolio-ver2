import { About, Hero, Portfolio, Services } from "src/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Portfolio />
    </main>
  );
}
