import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe, toString }) => {
  return (
    <Link
      to={toString + shoe._id}
      className="grid-item w-40 h-60 sm:w-56 sm:h-80 m-auto"
      title={shoe.name}
    >
      <div className="w-40 h-40 sm:w-56 sm:h-56 mb-4 bg-gray-300 border border-black shoe-card-container">
        {shoe.photos.length > 0 && (
          <img
            src={'http://localhost:4000/uploads/' + shoe.photos[0]}
            alt={shoe.name}
            className="object-cover h-full w-full"
          />
        )}
      </div>
      <div className="flex flex-col h-18 px-2 py-2 border border-black shoe-card-container">
        <div className="text-xs sm:text-sm truncate mb-1">{shoe.name}</div>
        <div>
          <div className="flex justify-between">
            <div className="text-xs mb-0 text-gray-500">{shoe.brand}</div>
            <div className="text-xs text-gray-500">{shoe.size}</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <div
                className="border border-black rounded-full bg-black h-2 w-2 sm:h-3 sm:w-3"
                style={{ backgroundColor: shoe.color1 }}
              ></div>
              <div
                className="border border-black rounded-full bg-black h-2 w-2 sm:h-3 sm:w-3"
                style={{ backgroundColor: shoe.color2 }}
              ></div>
            </div>
            <div className="text-xs">₱{shoe.price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ShoeCard.propTypes = {
  shoe: PropTypes.object.isRequired,
};

export default ShoeCard;
