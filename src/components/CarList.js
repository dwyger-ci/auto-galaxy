
const CarList = ({cars}) => {
  console.log(cars)
  return <ul> 
    {cars?.map(car => 
      <li key={car.key}>{car.make}</li>
    )}
  </ul>
}

export default CarList