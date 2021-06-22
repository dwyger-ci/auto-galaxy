import CarList from "../components/CarList"
import SearchFilters from "../components/SearchFilters"
import { useVehicles } from "../contexts/VehiclesContext"

const CarListPage = ()=> {
  const cars = useVehicles()
  console.log(cars)
  return (
    <>
      <SearchFilters />
      <CarList cars={cars}/>
    </>
  );
}

export default CarListPage