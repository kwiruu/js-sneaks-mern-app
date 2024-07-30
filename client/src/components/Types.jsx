import PropTypes from 'prop-types';

export default function Types({ selected, onChange }) {
  function handleCbClick(e) {
    const { id } = e.target;
    onChange(id); // Only allow one selection
  }

  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">By Type</legend>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="loafers"
              name="shoeType"
              type="radio"
              checked={selected === 'loafers'}
              onChange={handleCbClick}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="loafers" className="font-medium text-gray-900">
              Loafers
            </label>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="sneakers"
              name="shoeType"
              type="radio"
              checked={selected === 'sneakers'}
              onChange={handleCbClick}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="sneakers" className="font-medium text-gray-900">
              Sneakers
            </label>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="rubberShoes"
              name="shoeType"
              type="radio"
              checked={selected === 'rubberShoes'}
              onChange={handleCbClick}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="rubberShoes" className="font-medium text-gray-900">
              Rubber Shoes
            </label>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="boots"
              name="shoeType"
              type="radio"
              checked={selected === 'boots'}
              onChange={handleCbClick}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="boots" className="font-medium text-gray-900">
              Boots
            </label>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="sandals"
              name="shoeType"
              type="radio"
              checked={selected === 'sandals'}
              onChange={handleCbClick}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="sandals" className="font-medium text-gray-900">
              Sandals
            </label>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="casualShoes"
              name="shoeType"
              type="radio"
              checked={selected === 'casualShoes'}
              onChange={handleCbClick}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="casualShoes" className="font-medium text-gray-900">
              Casual Shoes
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

Types.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
