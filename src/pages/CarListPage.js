import CarList from "../components/CarList"
import cars from "../assets/cars.json"

const CarListPage = ()=> {
  return (
    <CarList cars={cars}/>
  );
}

export default CarListPage