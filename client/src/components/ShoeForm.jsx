import { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Types from '../components/Types';
import Tags from '../components/Tags';
import ImageUpload from '../components/ImageUpload';
import ShoeDetails from '../components/ShoeDetails';
import axios from 'axios';

export default function ShoeForm() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addedPhoto, setAddedPhoto] = useState([]);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [color1, setColor1] = useState('#000000');
  const [color2, setColor2] = useState('#000000');
  const [type, setType] = useState('');
  const [tags, setTags] = useState([]);
  const [redirect, setRedirect] = useState('');
  const [status, setStatus] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (!id) return;

    axios.get(`/shoes/${id}`).then((response) => {
      const { data } = response;
      setName(data.name);
      setDescription(data.description);
      setBrand(data.brand);
      setPrice(data.price);
      setSize(data.size);
      setColor1(data.color1);
      setColor2(data.color2);
      setType(data.type);
      setTags(data.tags);
      setStatus(data.status);
      setAddedPhoto(data.photos);
      setDate(data.date);
    });
  }, [id]);

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleStatusChange = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  async function saveNewShoe(event) {
    event.preventDefault();

    const placeData = {
      name,
      description,
      addedPhoto,
      brand,
      price,
      size,
      color1,
      color2,
      type,
      tags,
      status,
      date,
    };

    if (id) {
      await axios.put('/shoes', {
        id,
        ...placeData,
      });
      setRedirect('/account');
    } else {
      await axios.post('/shoes', placeData);
      setRedirect('/account');
    }
  }

  async function deleteShoe() {
    if (id) {
      try {
        await axios.delete(`/api/shoes/${id}`);
        setRedirect('/account');
      } catch (error) {
        console.error("Failed to delete shoe:", error);
      }
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <form onSubmit={saveNewShoe} className="p-4 mt-16">
        <div className="space-y-12 md:pl-44 md:pr-44 pl-5 pr-5">
          <ShoeDetails
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
          />
          <ImageUpload addedPhoto={addedPhoto} onChange={setAddedPhoto} />
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Shoe Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Information of the shoe for detailed specification.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brand
                </label>
                <div className="mt-2">
                  <select
                    id="brand"
                    name="brand"
                    autoComplete="brand-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={brand}
                    onChange={handleBrandChange}
                  >
                    <option value="">Select a brand</option>
                    <option value="Nike">Nike</option>
                    <option value="Converse">Converse</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Vans">Vans</option>
                    <option value="Reebok">Reebok</option>
                    <option value="Puma">Puma</option>
                    <option value="Fila">Fila</option>
                    <option value="Under Armour">Under Armour</option>
                    <option value="Asics">Asics</option>
                    <option value="New Balance">New Balance</option>
                    <option value="Brooks">Brooks</option>
                    <option value="Marc O'Polo">Marc O&apos;Polo</option>
                    <option value="Loro Piana">Loro Piana</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">
                  Size
                </label>
                <div className="mt-2">
                  <input
                    id="size"
                    name="size"
                    type="number"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="color"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Primary Color
                </label>
                <div className="mt-2 flex items-center">
                  <input
                    id="color1"
                    name="color1"
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="block p-2 w-10 h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span className="ml-4 text-sm font-medium leading-6 text-gray-900">{color1}</span>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="color2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Secondary Color
                </label>
                <div className="mt-2 flex items-center">
                  <input
                    id="color2"
                    name="color2"
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="block p-2 w-10 h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span className="ml-4 text-sm font-medium leading-6 text-gray-900">{color2}</span>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status
                </label>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={handleStatusChange}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      status ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'
                    }`}
                  >
                    {status ? 'Available' : 'Sold'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Shoe specification</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This will determine the type of shoe it will be displayed.
            </p>
            <div className="mt-10 space-y-10">
              <Types selected={type} onChange={setType} />
              <Tags selected={tags} onChange={setTags} />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to={'/account'} className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </Link>
          {id && (
            <button
              type="button"
              onClick={deleteShoe}
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
