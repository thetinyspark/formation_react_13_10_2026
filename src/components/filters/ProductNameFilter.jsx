import PropTypes from 'prop-types';

export default function ProductNameFilter({ onValueChange }) {
  return (
    <input 
      type="text" 
      placeholder="Filter by name..." 
      onChange={(e) => onValueChange(e.target.value)}
    />
  );
}

ProductNameFilter.propTypes = {
  onValueChange: PropTypes.func.isRequired
};
