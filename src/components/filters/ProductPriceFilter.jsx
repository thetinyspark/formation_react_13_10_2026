import PropTypes from 'prop-types';

export default function ProductPriceFilter({ label, testid, onPriceChange }) {
  return (
    <>
      <label>{label}</label>
      <input type="number" data-testid={testid} onChange={(e) => onPriceChange(e.target.value)} />
      <br />
    </>
  );
}

ProductPriceFilter.propTypes = {
  onPriceChange: PropTypes.func.isRequired,
};
