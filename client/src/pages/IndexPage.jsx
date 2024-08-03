import Marquee from '../components/Marquee';
import '../index.css';
import Recent from '../components/Recent';
import Category from '../components/Category';

export default function IndexPage() {
  const logos = [
    { src: '/company-logo/nike.svg', alt: 'Nike Logo' },
    { src: '/company-logo/converse.svg', alt: 'Converse Logo' },
    { src: '/company-logo/marc-opolo.svg', alt: "Marc O'Polo Logo" },
    { src: '/company-logo/adidas.svg', alt: 'Adidas Logo' },
    { src: '/company-logo/reebok.svg', alt: 'Reebok Logo' },
    { src: '/company-logo/puma.svg', alt: 'Puma Logo' },
    { src: '/company-logo/fila.svg', alt: 'Fila Logo' },
    { src: '/company-logo/under-armour.svg', alt: 'Under Armour Logo' },
    { src: '/company-logo/asics.svg', alt: 'Asics Logo' },
    { src: '/company-logo/new-balance.svg', alt: 'New Balance Logo' },
    { src: '/company-logo/brooks.svg', alt: 'Brooks Logo' },
    { src: '/company-logo/vans.svg', alt: 'Vans Logo' },
  ];

  return (
    <>
      <div className="sm:px-4 mx-3 lg:px-20 sm:mx-10">
        <div className="my-8 mx-3 flex overflow-x-auto sm:flex sm:overflow-x-auto space-x-4 pt-10 sm:space-x-10 hide-scrollbar">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 border border-black flex items-center justify-center"
            >
              <img className="h-8 w-8 sm:w-12 sm:h-12" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        <h1 className="font-semibold pb-8 mx-2">Recent</h1>

        <Recent />
      </div>
      <Marquee />
      <Category />
    </>
  );
}
