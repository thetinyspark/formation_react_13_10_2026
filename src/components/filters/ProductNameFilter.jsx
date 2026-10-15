import PropTypes from 'prop-types';

export default function ProductNameFilter({ onValueChange, testid }) {
  return (
    <input 
      type="text" 
      placeholder="Filter by name..." 
      data-testid={testid}
      onChange={(e) => onValueChange(e.target.value)}
    />
  );
}

ProductNameFilter.propTypes = {
  onValueChange: PropTypes.func.isRequired
};
