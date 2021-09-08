import PropTypes from 'prop-types';

const MeasureDetail = ({ id, name }) => (
  <a className="bg-blue-300 rounded-lg py-3 text-white shadow-lg m-3 shadow-xl" href={`/show/${id}`} >
    <h1 className="bg-blue-400 rounded p-0">{name}</h1>
  </a>
);

MeasureDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MeasureDetail;
