import { Card, Col, Container, Row } from "react-bootstrap"
import { useHistory } from "react-router"

const CarList = (cars) => {
  const { push } = useHistory()
  console.log(cars)
  return <Container>
    <Row>
      {cars.cars.map(car =>
        <Col key={car.id} sm={12} md={4} onClick={() => push(`/${car.id}`)}>
          <Card>
            <Card.Body>
              <Card.Title>{car.make}</Card.Title>
              <Card.Text>{car.model}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
}

export default CarList