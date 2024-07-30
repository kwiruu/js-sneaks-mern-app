import { Link, useParams } from 'react-router-dom';
import ShoeForm from '../components/ShoeForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShoeCard from '../components/ShoeCard'; // Import the new ShoeCard component

export default function ShoesList() {
  const { action } = useParams();
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get('/shoes').then((response) => {
      setShoes(response.data);
    });
  }, []);

  return (
    <>
      <div className="pb-3 pt-1 p-0 md:p-14">
        <div className="flex justify-between items-center p-5 sm:p-1">
          <h1 className="text-2xl xs:text-1xl font-bold p-1">Shoes List</h1>
        </div>

        {action === 'new' && <ShoeForm />}

        <div className="grid-container">
          {action !== 'new' && (
            <div className="text-center flex justify-center">
              <Link
                className="flex flex-col text-xs mb-1 text-gray-500 items-center w-40 h-60 sm:w-56 sm:h-80 mt-2 justify-center rounded-lg border border-dashed border-gray-900/25"
                to={'/account/shoes/new'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add new shoe
              </Link>
            </div>
          )}

          {shoes.map((shoe) => (
            <ShoeCard key={shoe._id} shoe={shoe} toString={'/account/shoes/'} />
          ))}
        </div>
      </div>
    </>
  );
}
