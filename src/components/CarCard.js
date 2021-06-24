import { Card, Button } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { VehiclesContext } from "../contexts/VehiclesContext"

const CarCard = (singleCar) => {
  const { viewData, cart, setCart } = useContext(VehiclesContext)
  const [car, setCar] = useState()
  console.log("single car passed in is " + singleCar)

  useEffect(() => {
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
        {console.log("SingleCar: " + singleCar.make)}
        <Card.Title>{singleCar.make}</Card.Title>
        <Card.Text>{singleCar.model} ({singleCar.year})</Card.Text>
        {(singleCar.available && !singleCar.some(item => item.id === singleCar.id)) ? 
        <Button name={singleCar.id} title="Add to Cart" onClick={cartClick}>Add to Cart</Button> :
        ''}
      {cart.some(item => item.id === singleCar.id) ? 
        <Button name={singleCar.id} title="Remove from Cart" onClick={cartClick}>Remove from Cart</Button> :
        ''}
      </Card.Body>
    </Card>
}

export default CarCard