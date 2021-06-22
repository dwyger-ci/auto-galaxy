import { createContext, useState } from 'react'

export const VehiclesContext = createContext(null)

export const VehiclesProvider = ({ children }) => {
  const [vehiclesMap, setVehiclesMap] = useState({})
  const getPhotos = commId => vehiclesMap[commId] ? [...vehiclesMap[commId]] : []
  const setPhotos = (commId, photos) => setVehiclesMap({ ...vehiclesMap, [commId]: photos })
  return (
    <VehiclesContext.Provider value={{ getPhotos, setPhotos }}>
      {children}
    </VehiclesContext.Provider>
  )
}