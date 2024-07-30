import axios from 'axios';
import { useEffect, useState } from 'react';
import ShoeCard from '../components/ShoeCard';

export default function Recent() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get('/shoes')
      .then((response) => {
        const sortedShoes = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setShoes(sortedShoes.slice(0, 5));
      })
      .catch((error) => {
        console.error('Error fetching shoes:', error);
      });
  }, []);

  return (
    <>
      <div className="py-2 flex overflow-x-auto sm:flex sm:overflow-x-auto space-x-2 sm:space-x-9 hide-scrollbar">
        {shoes.length > 0 && shoes.map((shoe) => <ShoeCard key={shoe._id} shoe={shoe} toString={'/shoe/'}/>)}
      </div>
    </>
  );
}
