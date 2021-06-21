import CarList from "../components/CarList"
import SearchFilters from "../components/SearchFilters"
import cars from "../assets/cars.json"

const CarListPage = ()=> {
  return (
    <>
      <SearchFilters />
      <CarList cars={cars}/>
    </>
  );
}

export default CarListPage