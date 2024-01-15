import React, { useEffect } from "react";

import Row from "./../ui/Row";
import Heading from "../ui/Heading";
import CarTab from "../features/cars/CarTab";
export default function Cars() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Les Voitures</Heading>
        <p>TEST</p>
      </Row>
      <CarTab />
    </>
  );
}
