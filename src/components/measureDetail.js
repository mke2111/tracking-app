import PropTypes from 'prop-types';

const MeasureDetail = ({ id, name }) => (
  <a className="" href={`/show/${id}`} >
    <h1>{name}</h1>
  </a>
);

MeasureDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MeasureDetail;
