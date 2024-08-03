import { useState, useEffect } from 'react';
import axios from 'axios';
import ShoeCard from '../components/ShoeCard';

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';

const sortOptions = [
  { name: 'Newest', href: '#', current: false },
  { name: 'Oldest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

const subCategories = [
  { name: 'All', value: '' },
  { name: 'Available', value: 'true' },
  { name: 'Sold', value: 'false' },
  { name: 'Sneakers', value: 'sneakers' },
  { name: 'Loafers', value: 'loafers' },
  { name: 'Rubber Shoes', value: 'rubber-shoes' },
  { name: 'Sandals', value: 'sandals' },
  { name: 'Boots', value: 'boots' },
];

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'basketball-shoes', label: 'Basketball Shoes', checked: false },
      { value: 'casual-shoes', label: 'Casual Shoes', checked: false },
      { value: 'hiking-shoes', label: 'Hiking Shoes', checked: false },
      { value: 'formal-shoes', label: 'Formal Shoes', checked: false },
      { value: 'running-shoes', label: 'Running Shoes', checked: false },
      { value: 'tennis-shoes', label: 'Tennis Shoes', checked: false },
      { value: 'low-top', label: 'Low Top', checked: false },
      { value: 'mid-top', label: 'Mid Top', checked: false },
      { value: 'high-top', label: 'High Top', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '7', label: '7', checked: false },
      { value: '7.5', label: '7.5', checked: false },
      { value: '8', label: '8', checked: false },
      { value: '8.5', label: '8.5', checked: false },
      { value: '9', label: '9', checked: false },
      { value: '9.5', label: '9.5', checked: false },
      { value: '10', label: '10', checked: false },
      { value: '10.5', label: '10.5', checked: false },
      { value: '11', label: '11', checked: false },
      { value: '11.5', label: '11.5', checked: false },
      { value: '12', label: '12', checked: false },
      { value: '12.5', label: '12.5', checked: false },
      { value: '13', label: '13', checked: false },
      { value: '13.5', label: '13.5', checked: false },
      { value: '14', label: '14', checked: false },
      { value: '14.5', label: '14.5', checked: false },
      { value: '15', label: '15', checked: false },
      { value: '15.5', label: '15.5', checked: false },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'Nike', label: 'Nike', checked: false },
      { value: 'Converse', label: 'Converse', checked: false },
      { value: "Marc O'Polo", label: "Marc O'Polo", checked: false },
      { value: 'Adidas', label: 'Adidas', checked: false },
      { value: 'Reebok', label: 'Reebok', checked: false },
      { value: 'Puma', label: 'Puma', checked: false },
      { value: 'Fila', label: 'Fila', checked: false },
      { value: 'Under Armour', label: 'Under Armour', checked: false },
      { value: 'Asics', label: 'Asics', checked: false },
      { value: 'New Balance', label: 'New Balance', checked: false },
      { value: 'Brooks', label: 'Brooks', checked: false },
      { value: 'Vans', label: 'Vans', checked: false },
      { value: 'Loro Piana', label: 'Loro Piana', checked: false },
      { value: 'Others', label: 'Others', checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Category() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [selectedType, setSelectedType] = useState('true');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [sortOption, setSortOption] = useState('');

  const [query] = useState('');

  useEffect(() => {
    axios.get('/shoes').then((response) => {
      setShoes(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const category = e.target.name;

    if (category === 'size') {
      setSelectedSizes((prev) =>
        prev.includes(value) ? prev.filter((size) => size !== value) : [...prev, value]
      );
    } else if (category === 'brand') {
      setSelectedBrands((prev) =>
        prev.includes(value) ? prev.filter((brand) => brand !== value) : [...prev, value]
      );
    } else {
      setSelectedTags((prev) =>
        prev.includes(value) ? prev.filter((tag) => tag !== value) : [...prev, value]
      );
    }
  };

  const handleClick = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredShoes = shoes.filter((shoe) => {
    const matchesQuery = shoe.name.toLowerCase().includes(query.toLowerCase());

    // Handle "Available" and "Sold" options
    const matchesType =
      selectedType === 'true'
        ? shoe.status === true
        : selectedType === 'false'
          ? shoe.status === false
          : selectedType
            ? shoe.type === selectedType ||
              shoe.tags.includes(selectedType) ||
              shoe.size === selectedType ||
              shoe.name.includes(selectedType) ||
              shoe.brand.includes(selectedType)
            : true;

    const matchesTags =
      selectedTags.length > 0 ? selectedTags.every((tag) => shoe.tags.includes(tag)) : true;
    const matchesSizes =
      selectedSizes.length > 0 ? selectedSizes.includes(shoe.size.toString()) : true;
    const matchesBrands = selectedBrands.length > 0 ? selectedBrands.includes(shoe.brand) : true;

    return matchesQuery && matchesType && matchesTags && matchesSizes && matchesBrands;
  });

  const sortedShoes = filteredShoes.sort((a, b) => {
    switch (sortOption) {
      case 'Newest':
        return new Date(b.date) - new Date(a.date);
      case 'Oldest':
        return new Date(a.date) - new Date(b.date);
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
  };

  const smallScreenStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(165px, 1fr))',
    gap: '10px',
  };

  return (
    <div className="bg-white">
      <div className="px-4 sm:px-24">
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <label>
                        <input
                          onClick={handleClick}
                          value={category.value}
                          type="radio"
                          name="category"
                          className="m-4"
                          defaultChecked={category.value === 'true'} // Set "Available" as default
                        />
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              value={option.value}
                              checked={
                                selectedTags.includes(option.value) ||
                                selectedSizes.includes(option.value) ||
                                selectedBrands.includes(option.value)
                              }
                              type="checkbox"
                              onChange={handleChange}
                              name={
                                section.id === 'size'
                                  ? 'size'
                                  : section.id === 'brand'
                                    ? 'brand'
                                    : 'tag'
                              }
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label className="ml-3 text-sm text-gray-600">{option.label}</label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-8xl px-0 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          onClick={() => setSortOption(option.name)}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100'
                          )}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <label>
                        <input
                          onClick={handleClick}
                          value={category.value}
                          type="radio"
                          name="category"
                          className="mx-3"
                        />
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              value={option.value}
                              checked={
                                selectedTags.includes(option.value) ||
                                selectedSizes.includes(option.value) ||
                                selectedBrands.includes(option.value)
                              }
                              type="checkbox"
                              onChange={handleChange}
                              name={
                                section.id === 'size'
                                  ? 'size'
                                  : section.id === 'brand'
                                    ? 'brand'
                                    : 'tag'
                              }
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label className="ml-3 text-sm text-gray-600">{option.label}</label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="col-span-2 lg:col-span-3">
                <div
                  style={window.innerWidth < 640 ? smallScreenStyle : gridStyle}
                  className="w-full"
                >
                  {sortedShoes.length > 0 &&
                    sortedShoes.map((shoe) => (
                      <ShoeCard key={shoe._id} shoe={shoe} toString={'/shoe/'} />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
