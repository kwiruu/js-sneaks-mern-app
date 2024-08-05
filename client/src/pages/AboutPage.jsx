import aboutimg from '../assets/about-img.jpg';

export default function AboutPage() {
  const handleCopy = (text) => {
    // Use the Clipboard API to copy the text
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Optionally, provide feedback
        alert('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img alt="" src={aboutimg} className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Know your sources</h2>

              <p className="mt-4 text-gray-600">
                Our carefully curated collection features high-quality, pre-loved sneakers from top
                brands, ensuring you step out in style without breaking the bank. Each pair is
                handpicked and thoroughly inspected to meet our high standards, so you can shop with
                confidence.
              </p>

              <a
                href="https://www.facebook.com/messages/t/302146342984780"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                target="_blank"
              >
                Order One Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white px-0 sm:px-28">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

            <p className="mt-4 text-gray-300">
              Join the JS Sneaks community today and explore a world of unique footwear that’s as
              affordable as it is fashionable. Because at JS Sneaks, great style is always within
              reach.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Curated Selection</h2>

                <p className="mt-1 text-sm text-gray-300">
                  At JS Sneaks, we pride ourselves on offering a meticulously curated collection of
                  high-quality, pre-loved sneakers from top brands. Our team of experts handpicks
                  each pair, ensuring they meet our rigorous standards for style, condition, and
                  authenticity. This means you can confidently find unique, fashionable sneakers
                  that suit your style without breaking the bank.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Sustainable Fashion Choice</h2>

                <p className="mt-1 text-sm text-gray-300">
                  By choosing pre-loved sneakers from JS Sneaks, you&apos;re making a sustainable
                  fashion choice. Our mission is to reduce waste and promote recycling by giving
                  sneakers a second life. Each purchase helps in minimizing environmental impact,
                  making it a win-win for you and the planet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Thorough Inspection Process</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Every pair of sneakers that enters our store undergoes a comprehensive inspection
                  process. Our team checks for quality, cleanliness, and durability, ensuring that
                  only the best products make it to our shelves. You can trust that your sneakers
                  will not only look great but also stand the test of time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Affordable Prices for Top Brands</h2>

                <p className="mt-1 text-sm text-gray-300">
                  We believe that style should be accessible to everyone. At JS Sneaks, you&rsquo;ll
                  find sneakers from top brands at a fraction of their original price. Our
                  competitive pricing means you can enjoy high-end fashion without the high-end
                  cost, making it easier to expand your sneaker collection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Exceptional Customer Service</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Customer satisfaction is at the heart of everything we do. Our friendly and
                  knowledgeable team is always ready to assist you, whether you need help finding
                  the perfect pair or have questions about your order. We&apos;re committed to
                  providing a seamless shopping experience, from browsing to delivery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">
                  Exclusive Sneaker Releases and Limited Editions
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  At JS Sneaks, we offer access to exclusive sneaker releases and limited editions
                  that are often hard to find elsewhere. Whether you&apos;re a sneaker collector or
                  just looking for something unique, our store provides an opportunity to snag rare
                  and coveted sneakers that set you apart from the crowd. Stay ahead of the trend
                  with our ever-evolving inventory of special releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 ">
              Keiru Vent O. Cabili
            </h2>

            <p className="mt-3 text-gray-500 ">
              Hi!, I&apos;m Keiru, an aspiring full-stack web developer with a passion for creating
              MERN stack websites. I am currently a 3rd year BSCS student of the Cebu Institute of
              Technology - University. I singlehandedly developed this website as a summer project
              to sharpen my skills in web development.
            </p>

            <a
              href="https://www.linkedin.com/in/keiru-cabili-6944552a4/"
              className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white transition-colors duration-300 bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Hire me
            </a>
          </div>

          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 ">Jan E. Paitan</h2>

            <p className="mt-3 text-gray-500 ">
              As the visionary behind JS Sneaks, combines a love for sneakers with a commitment to
              sustainability. My goal is to offer high-quality, pre-loved sneakers that are both
              stylish and eco-friendly. JS Sneaks has become a go-to destination for fashion-forward
              and environmentally conscious sneaker enthusiasts.
            </p>

            <a
              href="https://www.facebook.com/sadesa.sews"
              className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-gray-700 transition-colors duration-300 transform bg-white border border-gray-200 rounded-lg hover:bg-gray-100  focus:ring focus:ring-gray-200 focus:ring-opacity-80"
            >
              Follow me
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Send an email</h1>

            <p className="mt-1.5 text-sm text-gray-500">
              With us, you can always expect a prompt response to your inquiries. Reach out to us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
              onClick={() => handleCopy('jajapaitan@gmail.com')}
            >
              <span className="text-sm font-medium"> Jajapaitan@gmail.com </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <button
              className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
              onClick={() => handleCopy('keiruvent.cabili@gmail.com')}
            >
              keiruvent.cabili@gmail.com
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
