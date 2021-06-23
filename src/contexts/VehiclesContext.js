import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const vehiclesApi="http://localhost:5000/api/vehicles"



export const VehiclesContext = createContext([])

export const VehiclesProvider = ({ children }) => {
  console.log('at the beginning')
  const [ data, setCars ] = useState([])

  useEffect(() => {
    getVehicles()
  }, [])

  const getVehicles = async () => {
    const vehicles = await axios(vehiclesApi)
    // console.log(vehicles)
    await setCars(vehicles.data)
    console.log('Heres the vehicles ' + vehicles.data[0].id)
    return
  }
  
  return (
    <VehiclesContext.Provider value={{data}}>
      {children}
    </VehiclesContext.Provider>
  )
}