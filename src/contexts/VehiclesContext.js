import axios from 'axios'
import { createContext, useContext } from 'react'

const vehiclesApi="http://localhost:5000/api/vehicles"

export const getVehicles = async () => {
  var vehicles = await axios(vehiclesApi).then(result => result.data)
  console.log(vehicles)
  return vehicles
}

const VehiclesContext = createContext(getVehicles())

export const useVehicles = () => useContext(VehiclesContext)

export const VehiclesProvider = ({ children }) => {
  const [vehiclesMap] = useVehicles()
  
  return (
    <VehiclesContext.Provider value={vehiclesMap}>
      {children}
    </VehiclesContext.Provider>
  )
}