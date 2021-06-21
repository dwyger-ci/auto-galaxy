import { Card } from "react-bootstrap"

const CarList = ({cars}) => {
  console.log(cars)
  return <ul> 
    {cars?.map(car => 
      <Card key={car.key}>
        <Card.Body>
          <Card.Title>{car.make}</Card.Title>
          <Card.Text>{car.model}</Card.Text>
        </Card.Body>
      </Card>
    )}
  </ul>
}

export default CarList