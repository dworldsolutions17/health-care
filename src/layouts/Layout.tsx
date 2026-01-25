import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';
import AIChatbot from '../components/AIChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-soft-bg">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
      <AIChatbot />
    </div>
  );
};

export default Layout;
