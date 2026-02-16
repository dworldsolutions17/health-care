import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import ScrollToTop from "../components/ScrollToTop";
import OfferRibbon from "../components/OfferRibbon";
import CookieConsent from "../components/CookieConsent";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-soft-bg">
      <ScrollToTop />
      <Header />
      <main >
        <OfferRibbon />
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
      <CookieConsent />
    </div>
  );
};

export default Layout;
