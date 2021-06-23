import { Form,Row,Col } from "react-bootstrap"
import { useContext, useState } from "react"
import Select from 'react-select'
import { VehiclesContext } from "../contexts/VehiclesContext"

const SearchFilters = () => {
  const onSelectedOptionsChange = (selectedArray, action) => {
    console.log(selectedArray);
    console.log(action.name);
    const initialMakeState = filter.make.length > 0 ? filter.make : [];
    const initialModelState = filter.model.length > 0 ? filter.model : [];
    const yearMin = filter.yearMin != 2000 ? filter.yearMin : 2000;
    const yearMax = filter.yearMin != 2050 ? filter.yearMax : 2050;
    switch(action.name) {
      case "make":
        setFilter({make: selectedArray, model: initialModelState, yearMin: yearMin, yearMax: yearMax})
        // console.log(filterBy)
        break
      case "model":
        setFilter({make: initialMakeState, model: selectedArray, yearMin: yearMin, yearMax: yearMax})
        break
      default:
        console.log("YOU FOOL")
        break
    }
    console.log(filter)
  }
  const sliderChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    const initialMakeState = filter.make.length > 0 ? filter.make : [];
    const initialModelState = filter.model.length > 0 ? filter.model : [];
    let yearMin = filter.yearMin !== 2000 ? filter.yearMin : 2000;
    let yearMax = filter.yearMin !== 2050 ? filter.yearMax : 2050;
    switch(e.target.name) {
      case "year-min":
        if (e.target.value > yearMax) yearMax = e.target.value
        setFilter({make: initialMakeState, model: initialModelState, yearMin: e.target.value, yearMax: yearMax})
        break
      case "year-max":
        if (e.target.value < yearMin) yearMin = e.target.value
        setFilter({make: initialMakeState, model: initialModelState, yearMin: yearMin, yearMax: e.target.value})
        break
      default:
          console.log("YOU FOOL")
          break
    }
  }
  const models = [{ value: 'Focus', label: 'Focus' }, { value: "Impala", label: "Impala"}, {value: "Prius", label: "Prius"}]
  const makes = [{ value: 'Ford', label: 'Ford' },{ value: 'Chevrolet', label: 'Chevrolet'}, {value: "Toyota", label: 'Toyota'}, {value: "Volkswagen", label: "Volkswagen" }]
  const [ value1, setValue1 ] = useState(2000);
  const [ value2, setValue2 ] = useState(2050);
  // const [ filterBy, setFilterBy ] = useState({make: [], model: []});
  const { filter, setFilter } = useContext(VehiclesContext);


  return (
    <>
      <div className="filter-box">
        <h2>Vehicle Filters</h2>
        <Form>
          <Form.Group as={Row}>
            <Col m="6">
              <Form.Label>Make</Form.Label>
              <Select
                isMulti
                name="make"
                options={makes}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onSelectedOptionsChange}
              />
            </Col>
            <Col m="6">
              <Form.Label>Model</Form.Label>
              <Select
                isMulti
                name="model"
                options={models}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onSelectedOptionsChange}
              />
            </Col>
          </Form.Group>
          <br />
          <Form.Label>Year</Form.Label>
          <Form.Group as={Row}>
            <Col xs="6">
              <span>Min: {filter.yearMin}</span>
              <Form.Control name="year-min" type="range"
                value={filter.yearMin}
                onChange={sliderChange}
                min={2000}
                max={2050}
              />
            </Col>
            <Col xs="6">
              <span>Max: {filter.yearMax}</span>
              <Form.Control name="year-max" type="range"
                value={filter.yearMax}
                onChange={sliderChange}
                min={2000}
                max={2050}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default SearchFilters