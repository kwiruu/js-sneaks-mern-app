import { useMediaQuery } from 'react-responsive';

export default function Marquee() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <div className="bg-jsyellow w-full h-8 mt-14 text-xs font-light flex items-center">
        <div className="relative flex overflow-x-hidden w-full">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
            <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
            <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
            <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
            <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
          </div>
          {isSmallScreen ? null : (
            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap w-full">
              <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
              <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
              <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
              <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
              <span className="mx-10 sm:mx-20">We Deliver via J&T</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
