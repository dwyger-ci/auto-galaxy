import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const vehiclesApi="http://localhost:5000/api/vehicles"



export const VehiclesContext = createContext([])

export const VehiclesProvider = ({ children }) => {
  console.log('at the beginning')
  const [ filter, setFilter ] = useState({make: [], model: [], yearMin: 2000, yearMax: 2050})
  const [ data, setCars ] = useState([])
  const [ viewData, setViewData ] = useState([])
  const [ cart, setCart ] = useState([])

  useEffect(() => {
    getVehicles()
  }, [])

  // useEffect(() => {
  //   setViewData(data.filter(x => {
  //     if (filter.make && filter.make.includes(x.make)) return true
  //     // if (filter.model) filter.model.includes(x.model)
  //     return false
  //   }))
  // }, [filter])

  useEffect(() => {
    console.log(filter)
    let makes = []
    let models = []
    for (let make of filter.make) {
      makes.push(make.label)
    }
    for (let model of filter.model) {
      models.push(model.label)
    }
    setViewData(data.filter(x => (makes.includes(x.make) || models.includes(x.model)) && (x.year >= filter.yearMin && x.year <= filter.yearMax)))
  }, [filter])

  const getVehicles = async () => {
    const vehicles = await axios(vehiclesApi)
    // console.log(vehicles)
    await setCars(vehicles.data)
    await setViewData(vehicles.data)
    console.log('Heres the vehicles ' + vehicles.data[0].id)
    return
  }
  
  return (
    <VehiclesContext.Provider value={{viewData, filter, setFilter, cart, setCart}}>
      {children}
    </VehiclesContext.Provider>
  )
}