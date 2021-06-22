import { useContext } from "react"
import { Card } from "react-bootstrap"
import { VehiclesContext } from "../contexts/VehiclesContext"

const CarList = (cars) => {
  const { loading } = useContext(VehiclesContext)
  if (loading) return null
  console.log(cars)
  return <ul>
    {/* this is because objects  */}
    {cars.cars.map(car => 
      <Card key={car.id}>
        <Card.Body>
          <Card.Title>{car.make}</Card.Title>
          <Card.Text>{car.model}</Card.Text>
        </Card.Body>
      </Card>
    )}
  </ul>
}

export default CarList