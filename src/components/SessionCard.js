import PropTypes from 'prop-types';

const SessionCard = (props) => {
  const { title } = props;
  return (
    <div className="text-center shadow text-3xl hover:bg-gray-200 p-3 my-2 w-3/4 mx-auto rounded ">
      <h6>{title}</h6>
    </div>
  );
};
SessionCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SessionCard;
