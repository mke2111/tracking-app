import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
background-color: white;
padding: 1rem;
margin: 0.1rem 0`;

const TitleName = styled.h4`
color: #8090a0;
font-weight: 300`;

const TimeText = styled.h2`
font-weight: bold;
font-size: 2rem;
margin-right: 0.4rem`;

const DateText = styled.h2`
font-weight: bold;
font-size: 1.6rem;`;

const TimeContainer = styled.div`
display: flex;
align-items: center;`;

const InfoContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;`;

const ProgressCard = props => {
  const { date, name, time } = props;
  return (
    <CardContainer>
      <InfoContainer>
        <DateText>{date}</DateText>
        <TitleName>{name}</TitleName>
      </InfoContainer>
      <TimeContainer>
        <TimeText>{time}</TimeText>
        <span>hr(s)</span>
      </TimeContainer>
    </CardContainer>
  );
};

ProgressCard.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ProgressCard;
