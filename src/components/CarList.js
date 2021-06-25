import { Col, Container, Row} from "react-bootstrap"
import { useHistory } from "react-router"
import CarCard from "../components/CarCard"

const CarList = (cars) => {
  const { push } = useHistory()

  console.log(cars)
  return <Container>
    <Row>
      {cars.cars.map(car =>
        <Col key={car.id} sm={12} md={4} onClick={() => push(`/${car.id}`)}>
          <CarCard singleCar={car} />
        </Col>
      )}
    </Row>
  </Container>
}

export default CarList