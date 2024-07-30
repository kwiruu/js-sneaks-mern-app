import Footer from './components/Footer';
import Popup from './components/Popup';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Popup />
      <div className="p-4 px-4 lg:px-20">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
