import { useContext } from "react";
import CarList from "../components/CarList"
import SearchFilters from "../components/SearchFilters"
import { VehiclesContext } from "../contexts/VehiclesContext";

const CarListPage = ()=> {
  const {data} = useContext(VehiclesContext)
  console.log(data)
  return (
    <>
      <SearchFilters />
      {/* This is transforming data into object called cars.cars */}
      <CarList cars={data} />
    </>
  );
}

export default CarListPage