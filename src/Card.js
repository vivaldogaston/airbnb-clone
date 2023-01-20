import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <StyledCard>
      {props.tag && <Tag>{props.tag}</Tag>}
      <Img src={props.img} alt={props.alt} width="220px" height="294px" />
      <Info>
        <Star>&#9733;</Star>
        {props.rating}
        <Span>
          ({props.reviewCount}) &#x2022; {props.country}
        </Span>
      </Info>
      <Info>{props.alt}</Info>
      <Info>
        <b>From ${props.price}</b> / person
      </Info>
    </StyledCard>
  );
};
export default Card;

const StyledCard = styled.div`
  width: 220px;
`;
const Img = styled.img`
  border-radius: 5px;
  position: relative;
`;
const Tag = styled.span`
  background: white;
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 12px;
  margin: 7px;
  height: auto;
  text-transform: uppercase;
  position: absolute;
  z-index: 2;
`;
const Info = styled.label`
  font-size: 15px;
  display: block;
`;
const Star = styled.span`
  color: #fe395c;
  font-size: 20px;
`;
const Span = styled.span`
  color: grey;
`;
