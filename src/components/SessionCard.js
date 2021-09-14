import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
background-color: white;
padding: 1rem;
margin: 0.1rem 0;
`;

const SessionDate = styled.h4`
color: #8090a0;
font-weight: 300;`;

const TimeText = styled.h2`
font-weight: bold;
font-size: 2rem;
margin-right: 0.4rem`;

const TimeContainer = styled.div`
display: flex;
align-items: center;`;

const SessionCard = props => {
  const { date, title } = props;
  return (
    <CardContainer>
      <SessionDate>{date}</SessionDate>
      <TimeContainer>
        <TimeText>{title}</TimeText>
      </TimeContainer>
    </CardContainer>
  );
};
SessionCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default SessionCard;
