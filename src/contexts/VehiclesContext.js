import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const vehiclesApi="http://localhost:5000/api/vehicles"



export const VehiclesContext = createContext([], true)

export const VehiclesProvider = ({ children }) => {
  console.log('at the beginning')
  const [ data, setCars ] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getVehicles().then(() => {
      if (data) setLoading(false)
    })
  }, [])

  const getVehicles = async () => {
    const vehicles = await axios(vehiclesApi)
    // console.log(vehicles)
    await setCars(vehicles.data)
    console.log('Heres the vehicles ' + vehicles.data[0].id)
    return
  }

  // useEffect(() => {
  //   console.log('here')
    
  // }, [])
  
  return (
    <VehiclesContext.Provider value={{data, loading}}>
      {children}
    </VehiclesContext.Provider>
  )
}