import { Card, Button } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { VehiclesContext } from "../contexts/VehiclesContext"

const CarCard = (singleCar) => {
  const { viewData, cart, setCart } = useContext(VehiclesContext)
  const [car, setCar] = useState()

  useEffect(() => {
    setCar(singleCar)
    console.log("re-render because this car changed!")
  }, [car])

  const modifyCarStatus = async (id) => {
    const returnedCar = viewData.find(element => element.id == id)
    returnedCar.available = !returnedCar.available
    // Reserve the car for you
    setCar(returnedCar)
    console.log('Heres the car youre adding/removing from cart ' + returnedCar.id + ': ' + returnedCar.available)
    // Car is no longer available so it's going into your cart
    if(!returnedCar.available) {
      cart.push(returnedCar)
      setCart(cart)
      return
    } else {
      cart.filter(x => x.id !== returnedCar.id)
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

  return <Card>
      <Card.Body>
        <Card.Title>{car.make}</Card.Title>
        <Card.Text>{car.model} ({car.year}) {car.available.toString()}</Card.Text>
        {console.log(car.available)}
        {(car.available && !cart.some(item => item.id === car.id)) ? 
        <Button name={car.id} title="Add to Cart" onClick={cartClick}>Add to Cart</Button> :
        ''}
      {cart.some(item => item.id === car.id) ? 
        <Button name={car.id} title="Remove from Cart" onClick={cartClick}>Remove from Cart</Button> :
        ''}
      </Card.Body>
    </Card>
}

export default CarCard