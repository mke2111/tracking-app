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

const TimeContainer = styled.div`
display: flex;
align-items: center;`;

const Card = props => {
  const { title, time } = props;
  return (
    <CardContainer>
      <TitleName>{title}</TitleName>
      <TimeContainer>
        <TimeText>{time}</TimeText>
        <span>hr(s)</span>
      </TimeContainer>
    </CardContainer>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default Card;
