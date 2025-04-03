import { About, Main, Projects, Skills } from "src/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Main />
      <Skills />
      <About />
      <Projects />
    </main>
  );
}
