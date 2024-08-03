import PropTypes from 'prop-types';

export default function Tags({ selected, onChange }) {
  function handleCbClick(e) {
    const { checked, id } = e.target;
    if (checked) {
      onChange([...selected, id]);
    } else {
      onChange([...selected.filter((item) => item !== id)]);
    }
  }

  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">By Tags</legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        These are tags used to determine your shoe.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-x-3">
          <input
            id="basketball-shoes"
            checked={selected.includes('basketball-shoes')}
            name="basketball-shoes"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="basketball-shoes"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Basketball Shoes
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="running-shoes"
            checked={selected.includes('running-shoes')}
            name="running-shoes"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="running-shoes"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Running Shoes
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="casual-shoes"
            checked={selected.includes('casual-shoes')}
            name="casual-shoes"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="casual-shoes"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Casual Shoes
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="tennis-shoes"
            checked={selected.includes('tennis-shoes')}
            name="tennis-shoes"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="tennis-shoes"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tennis Shoes
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="hiking-shoes"
            checked={selected.includes('hiking-shoes')}
            name="hiking-shoes"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="hiking-shoes"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Hiking Shoes
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="high-top"
            checked={selected.includes('high-top')}
            name="high-top"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="high-top" className="block text-sm font-medium leading-6 text-gray-900">
            High Top
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="mid-top"
            checked={selected.includes('mid-top')}
            name="mid-top"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="mid-top" className="block text-sm font-medium leading-6 text-gray-900">
            Mid Top
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="low-top"
            checked={selected.includes('low-top')}
            name="low-top"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="low-top" className="block text-sm font-medium leading-6 text-gray-900">
            Low Top
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="formal-shoes"
            checked={selected.includes('formal-shoes')}
            name="formal-shoes"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="formal-shoes"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Formal Shoes
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="other"
            checked={selected.includes('other')}
            name="other"
            type="checkbox"
            onChange={handleCbClick}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="other" className="block text-sm font-medium leading-6 text-gray-900">
            Others
          </label>
        </div>
      </div>
    </fieldset>
  );
}

Tags.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
