import { Card, Button } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { VehiclesContext } from "../contexts/VehiclesContext"

const CarCard = ({singleCar}) => {
  const { viewData, cart, setCart } = useContext(VehiclesContext)
  const [car, setCar] = useState()

  useEffect(() => {
  }, [car])

  const modifyCarStatus = async (id) => {
    const returnedCar = viewData.find(element => element.id == id)
    setCar(returnedCar)
    console.log('Heres the car youre adding/removing from cart ' + returnedCar.id + ': ' + returnedCar.available)
    if(returnedCar.available) {
      const newCart = cart.filter(x => true)
      newCart.push(returnedCar)
      setCart(newCart)
      returnedCar.available = !returnedCar.available
      setCar(returnedCar)
      return
    } else {
      const newCart = cart.filter(x => x.id !== returnedCar.id)
      setCart(newCart)
      returnedCar.available = !returnedCar.available
      setCar(returnedCar)
      return
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
        <Card.Title>{singleCar.make}</Card.Title>
        <Card.Text>{singleCar.model} ({singleCar.year})</Card.Text>
        {(singleCar.available) ? 
        <Button name={singleCar.id} title="Add to Cart" onClick={cartClick}>Add to Cart</Button> : 
        <Button name={singleCar.id} title="Remove from Cart" onClick={cartClick}>Remove from Cart</Button>
        }
      </Card.Body>
    </Card>
}

export default CarCard