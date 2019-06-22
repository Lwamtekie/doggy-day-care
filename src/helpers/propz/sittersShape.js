import PropTypes from 'prop-types';

const sitterShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  Dog: PropTypes.string.isRequired,
});

export default { sitterShape };
