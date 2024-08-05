import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Marquee from '../components/Marquee';
import { Link } from 'react-router-dom';
import Image from '../components/Image';

export default function ShoePage() {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) return;

    axios.get(`/shoes/${id}`).then((response) => {
      console.log(response.data); // Log the response to check the structure
      setShoe(response.data);
    });
  }, [id]);

  if (!shoe) return <Loading />;

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black min-h-screen overflow-auto">
        <div className="p-8 grid gap-4 justify-center items-center min-h-screen">
          {shoe?.photos?.length > 0 &&
            shoe.photos.map((photo, index) => (
              <Link onClick={() => setShowAllPhotos(false)} key={index}>
                <Image src={photo} className="mx-auto" />
              </Link>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mt-16 p-2 sm:p-0">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {/* Left side: Photos */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {shoe.photos.slice(0, 4).map((photo, index) => (
                <Link
                  onClick={() => setShowAllPhotos(true)}
                  key={index}
                  className={`aspect-w-1 aspect-h-1 overflow-hidden border border-black ${
                    index === 3 && shoe.photos.length === 3 ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <Image
                    alt={photo.alt}
                    src={photo}
                    className="max-w-full max-h-full object-cover object-center"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Shoe info */}
          <div className="mt-4 lg:mt-0 lg:col-span-1 h-min">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl  mt-0 sm:mt-16">
              {shoe.name}
            </h1>
            <p className="text-1xl tracking-tight text-gray-600">{shoe.brand}</p>

            <p className="text-3xl tracking-tight text-gray-900">₱{shoe.price}</p>

            <div className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="flex gap-2 items-center py-4">
                  <div
                    className="border border-black rounded-full bg-black h-4 w-4 sm:h-6 sm:w-6"
                    style={{ backgroundColor: shoe.color1 }}
                    title={shoe.color1}
                  ></div>
                  <div
                    className="border border-black rounded-full bg-black h-4 w-4 sm:h-6 sm:w-6"
                    style={{ backgroundColor: shoe.color2 }}
                    title={shoe.color2}
                  ></div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    Size<span className="text-gray-400 text-xs"> (US)</span>
                  </h3>
                  <Link
                    to={'/size-guide'}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </Link>
                </div>
                {shoe.size}
              </div>

              <a
                href={`${
                  !shoe.status ? '' : 'https://www.facebook.com/messages/t/302146342984780'
                }`}
                className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  !shoe.status ? 'bg-red-500 hover:bg-red-700' : ''
                }`}
                target="_blank"
              >
                {!shoe.status ? 'Sold' : 'Contact Seller'}
              </a>
            </div>

            {/* Description and details */}
            <div className="py-10">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{shoe.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Tags</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {shoe.tags.map((tag) => (
                      <li key={tag} className="text-gray-400">
                        <span className="text-gray-600">
                          {tag.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Shoe type</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {shoe.type.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
    </div>
  );
}
