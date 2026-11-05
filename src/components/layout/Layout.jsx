import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppButton from "../common/WhatsAppButton";
import ScrollToTop from "../common/ScrollToTop";

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-white">
    <ScrollToTop />
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
    >
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content" className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
