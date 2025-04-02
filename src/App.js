import { Outlet } from "react-router-dom";
import { Footer, Header } from "src/components/common";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
