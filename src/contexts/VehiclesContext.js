import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const vehiclesApi="http://localhost:5000/api/vehicles"
const modelsApi ="http://localhost:5000/api/models"
const makesApi ="http://localhost:5000/api/makes"



export const VehiclesContext = createContext([])

export const VehiclesProvider = ({ children }) => {
  console.log('vehicles provider rerendered')
  const [ filter, setFilter ] = useState({make: [], model: [], yearMin: 2000, yearMax: 2050})
  const [ data, setCars ] = useState([])
  const [ viewData, setViewData ] = useState([])
  const [ cart, setCart ] = useState([])
  const [ models, setModels ] = useState([])
  const [ makes, setMakes ] = useState([])

  useEffect(() => {
    getVehicles()
    getFilters()
  }, [])

  // useEffect(() => {
  //   setViewData(data.filter(x => {
  //     if (filter.make && filter.make.includes(x.make)) return true
  //     // if (filter.model) filter.model.includes(x.model)
  //     return false
  //   }))
  // }, [filter])

  useEffect(() => {
    let makeFilters = []
    let modelFilters = []
    for (let make of filter.make) {
      makeFilters.push(make.label)
    }
    for (let model of filter.model) {
      modelFilters.push(model.label)
    }
    if (makeFilters.length === 0 && modelFilters.length === 0) {
      makeFilters = makes
      modelFilters = models
    }

    const filteredData = data.filter(x => (makeFilters.includes(x.make) || modelFilters.includes(x.model)) && (x.year >= filter.yearMin && x.year <= filter.yearMax))
    setViewData(filteredData.length > 0 ? filteredData : data)
  }, [filter])

  const getVehicles = async () => {
    const vehicles = await axios(vehiclesApi)

    await setCars(vehicles.data)
    await setViewData(vehicles.data)
    return
  }

  const getFilters = async () => {
    const models = await axios(modelsApi)
    const makes = await axios(makesApi)

    await setModels(models.data)
    await setMakes(makes.data)
  }
  
  return (
    <VehiclesContext.Provider value={{viewData, filter, setFilter, cart, setCart, models, makes}}>
      {children}
    </VehiclesContext.Provider>
  )
}