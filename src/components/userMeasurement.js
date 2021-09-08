import PropTypes from 'prop-types';

const UserMeasurements = ({ id, memory }) => (
  <div>
    <a href={`measure/${id}`} className="measure">
      <h1>
        memory:
        {memory}
      </h1>
    </a>
  </div>
);

UserMeasurements.propTypes = {
  id: PropTypes.number.isRequired,
  memory: PropTypes.number.isRequired
};

export default UserMeasurements;
