import PropTypes from 'prop-types';

const Card = props => {
  const { title, time } = props;
  return (
    <div className="flex justify-between bg-white shadow my-2 w-3/4 mx-auto p-4">
      <h4>{title}</h4>
      <div className="flex">
        <h3>{time}</h3>
        <span>hr(s)</span>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default Card;
