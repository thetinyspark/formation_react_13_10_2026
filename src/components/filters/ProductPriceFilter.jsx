import PropTypes from 'prop-types';

export default function ProductPriceFilter({ label, onPriceChange }) {
  return (
    <>
      <label>{label}</label>
      <input type="number"  onChange={(e) => onPriceChange(e.target.value)} />
      <br />
    </>
  );
}

ProductPriceFilter.propTypes = {
  onPriceChange: PropTypes.func.isRequired,
};
