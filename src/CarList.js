import cars from './assets/cars.json'

const CarList = () => {
  return <ul> 
    {cars.map(car => 
      <li key={car.key}>{car.make}</li>
    )}
  </ul>
}

export default CarList