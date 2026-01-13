import react from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';

interface LayoutProps {
  children: react.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
