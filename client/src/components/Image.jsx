import PropTypes from 'prop-types';

export default function Image({ src, ...rest }) {
  // Add prop type validation for 'src'
  Image.propTypes = {
    src: PropTypes.string.isRequired,
  };

  src = src && src.includes('https://') ? src : 'http://localhost:4000/uploads/' + src;
  return <img {...rest} src={src} alt={''} />;
}
