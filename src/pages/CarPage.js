import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Car from "../components/Car";
const vehicleApi="http://localhost:5000/api/vehicles/"

const CarPage = () => {
  const [car, setCar] = useState()
  let { id } = useParams();
  if (id === undefined) { 
    id = 'ede75bf3-b8e3-415d-9eb2-ff9071b16e31'
  }
  
  useEffect(() => {
    getCar()
  }, [])

  const getCar = async () => {

    const returnedCar = await axios.get(vehicleApi + id)

    const json = returnedCar.data
    await setCar(returnedCar.data)
    return
  }

  if (car) {
    return (
      <>
        <Car car={car}/>
      </>
    );
  }
  return null
}

export default CarPage