import { Card, Col, Container, Row, Button } from "react-bootstrap"
import { useHistory } from "react-router"
import { useState, useContext, useEffect } from "react"
import axios from "axios"
import { VehiclesContext } from "../contexts/VehiclesContext"
const vehicleApi="http://localhost:5000/api/vehicles/"

const CarList = (cars) => {
  const { push } = useHistory()
  const [car, setCar] = useState()
  const { cart, setCart } = useContext(VehiclesContext)

  const modifyCarStatus = async (id) => {
    console.log(vehicleApi + id)
    const returnedCar = cars.cars.find(element => element.id == id)
    returnedCar.available = !returnedCar.available
    setCar(returnedCar)
    console.log('Heres the car youre adding/removing from cart ' + returnedCar.id + ': ' + returnedCar.available)
    if(!returnedCar.available) {
      cart.push(returnedCar)
      setCart(cart)
      console.log("Your cart now contains: " + cart)
      return
    } else {
      cart.pop(returnedCar)
      setCart(cart)
      console.log("Your cart just spit out something and now it contains: " + cart)
    }
    console.log("CAR IS NOT FOR SALE")
    return
  }

  const cartClick = (e) => {
    e.stopPropagation()
    // Add/remove from cart
    modifyCarStatus(e.target.name)
  }

  console.log(cars)
  return <Container>
    <Row>
      {cars.cars.map(car =>
        <Col key={car.id} sm={12} md={4} onClick={() => push(`/${car.id}`)}>
          <Card>
            <Card.Body>
              <Card.Title>{car.make}</Card.Title>
              <Card.Text>{car.model} ({car.year}) {car.available.toString()}</Card.Text>
              {console.log(car.available)}
              {car.available ? 
              <Button name={car.id} title="Add to Cart" onClick={cartClick}>Add to Cart</Button> :
              <Button name={car.id} title="Add to Cart" onClick={cartClick}>Remove from Cart</Button>}
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
}

export default CarList