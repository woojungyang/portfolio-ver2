import { About, Main, Portfolio, Skills } from "src/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Main />
      <Skills />
      <About />
      <Portfolio />
    </main>
  );
}
