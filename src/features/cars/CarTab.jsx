import styled from "styled-components";
import { useCars } from "./useCars";
import CarItem from "./CarItem";
import Spinner from "../../ui/Spinner";

const TabSec = styled.div`
  padding: 1.2rem 1.6rem;
  border: 1px solid var(--color-grey-1);
  border: var(--border-radius-0);
  font-size: 1.4rem;
  overflow: hidden;
`;
const TabSecBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  column-gap: 1.2rem;
  padding: 1.2rem 2rem;
`;
const TabSecHeader = styled.div`
  padding: 2.6rem 1.2rem 0.8rem;
  background-color: var(--color-grey-1);
  border-bottom: 1px solid var(--color-grey-2);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  text-align: center;
`;

const CarTab = function () {
  const { isPending, cars } = useCars();
  console.log(cars);
  if (isPending) return <Spinner />;
  return (
    <TabSec>
      <TabSecHeader>All Car your are in your app</TabSecHeader>
      <TabSecBody>
        {cars.map((car) => {
          return <CarItem car={car} key={car.id} />;
        })}
      </TabSecBody>
    </TabSec>
  );
};
export default CarTab;
