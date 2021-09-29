import PropTypes from 'prop-types';

const ProgressCard = (props) => {
  const { date, name } = props;
  return (
    <div className="flex justify-between items-center m-3">
      <h3 className="text-2xl">{name}</h3>
      <h6>{date}</h6>
    </div>
  );
};

ProgressCard.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProgressCard;
