import { useContext } from "react";
import CarList from "../components/CarList"
import SearchFilters from "../components/SearchFilters"
import { VehiclesContext } from "../contexts/VehiclesContext";

const CarListPage = ()=> {
  const { viewData } = useContext(VehiclesContext)
  console.log(viewData)
  return (
    <>
      <SearchFilters />
      {/* This is transforming data into object called cars.cars */}
      <CarList cars={viewData} />
    </>
  );
}

export default CarListPage