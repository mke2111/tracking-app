import PropTypes from 'prop-types';

const Measure = ({ id, name }) => (
  <a className="" href={`/show/${id}`} >
    <h1>{name}</h1>
  </a>
);

Measure.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Measure;
