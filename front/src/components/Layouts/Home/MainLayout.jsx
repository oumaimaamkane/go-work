import { Outlet } from "react-router-dom";
import Header from "../../Navbar/Guest";
import ScrollButton from "../../Buttons/ScrollButton";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      {/* Scroll to Top Area  */}
      <ScrollButton />
      <Footer />
    </>
  );
}
