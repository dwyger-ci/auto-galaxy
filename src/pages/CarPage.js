import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Car from "../components/Car";
const vehicleApi="http://localhost:5000/api/vehicles/"

const CarPage = () => {
  const [car, setCar] = useState()
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    getCar()
  }, [])

  const getCar = async () => {

    console.log(vehicleApi + id)
    const returnedCar = await axios(vehicleApi + id)
    // console.log(vehicles)
    const json = returnedCar.data
    await setCar(returnedCar.data)
    console.log('Heres the car ' + json.id)
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