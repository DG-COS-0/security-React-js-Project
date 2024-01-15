import React from "react";
import styled from "styled-components";
import Row from "../../ui/Row";
import { format } from "date-fns";
import { formatCurrency } from "../../utils/utility";

const Img = styled.img`
  display: block;
  width: 16rem;
  height: 16rem;

  object-fit: cover;
  object-position: center;
`;
const CarName = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  color: var(--color-grey-7);
`;
const DayLocationPrice = styled.div`
  font-size: 1.6rem;
  color: var(--color-cyan-8);
  margin-top: 0.5rem;
`;
const ProprioCar = styled.div`
  font-size: 1.5rem;
  color: var(-color-grey-8);

  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    border-radius: 50%;
  }
`;

export default function CarItem({ car }) {
  const {
    brand,
    model,
    bodyType,
    yearOfManufacture,
    color,
    isAvailableNow,
    dailyLocationPrice,
    vehiclePhotos,
    ratingsAverage: ratings,
    owner: { firstName, surName, photo },
  } = car;
  console.log(color);
  return (
    <div
      style={{
        border: `2px solid red`,
        filter: `blur(${!isAvailableNow ? "1px" : ""})`,
        display: "flex",
        gap: "0.8rem",
        borderRadius: "var(--border-radius-2)",
        padding: "0.6rem",
        overflow: "hidden",
      }}
    >
      <Img />
      <div>
        <CarName>
          <div>
            {" "}
            <span>{brand}</span> <span>{model}</span>
          </div>
          <div
            style={{
              color: "var(--color-teal-8)",
              textDecoration: "underline",
              textAlign: "start",
            }}
          >
            {bodyType}
          </div>
        </CarName>
        <span> {"************"} </span>
        <Row type="vertical">
          <DayLocationPrice>
            {formatCurrency(dailyLocationPrice)} <br />
            {format(new Date(yearOfManufacture), "dd MMM yyyy")}
          </DayLocationPrice>
          <ProprioCar>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "4rem",
                  height: "4rem",
                  display: "block",
                  marginRight: "2rem",
                }}
                src={`http://localhost:3300/${photo}`}
                alt="img"
              />
              <div>
                {firstName} {surName}
              </div>
            </div>
          </ProprioCar>
        </Row>
      </div>
    </div>
  );
}
