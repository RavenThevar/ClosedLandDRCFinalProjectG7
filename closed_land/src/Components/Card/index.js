import React from "react";
import {
  CardContainer,
  CardImage,
  CardDetailsContainer,
  CardTitle,
  CardContent,
  CardImageWrapper,
  CardContainerElements,
  CardAlignContainer,
  CardLeftAlignContainer,
} from "./CardElement";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Cards = (props) => {
  const displayDetails = () => {
    console.log(props.ID);
  };
  return (
    <CardContainerElements>
      <CardContainer
        onClick={displayDetails}
        to={{
          pathname: "/details",
          state: { id: props.ID },
        }}
        malID={props.ID}
      >
        <CardImageWrapper>
          <CardImage src={props.imageSource} alt="No Image Displaying" />
        </CardImageWrapper>
        <CardAlignContainer>
          <CardDetailsContainer>
            <CardTitle>{props.collection}</CardTitle>
            <CardContent>
              Ratings:{" "}
              <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                {props.collectionName}
              </span>
            </CardContent>
          </CardDetailsContainer>
          <CardLeftAlignContainer>
            <CardTitle
              style={{
                textAlignLast: "right",
              }}
            >
              Price
            </CardTitle>
            <CardContent>
              hello
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlignLast: "right",
                }}
              >
                {props.collectionPrice}
              </span>
            </CardContent>
          </CardLeftAlignContainer>
        </CardAlignContainer>
      </CardContainer>
    </CardContainerElements>
  );
};

export default Cards;
