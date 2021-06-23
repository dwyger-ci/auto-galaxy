import { Form,Row,Col } from "react-bootstrap"
import { useState } from "react"
import Select from 'react-select'

const SearchFilters = () => {
  const onSelectedOptionsChange = (selectedArray, action) => {
    console.log(selectedArray);
    console.log(action.name);
    const initialMakeState = {...filterBy.make};
    const initialModelState = {...filterBy.model};
    switch(action.name) {
      case "make":
        setFilterBy({make: selectedArray, model: initialModelState})
        // console.log(filterBy)
        break
      case "model":
        setFilterBy({make: initialMakeState, model: selectedArray})
        break
      default:
        console.log("YOU FOOL")
        break
    }
    console.log(filterBy)
  }
  const sliderChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    // switch(e.target.name) {
    //   case ""
    // }
    // if (e.target.value > value2) setValue2(e.target.value)
    // setValue1(e.target.value)}
  }
  const models = [{ value: 'Focus', label: 'Focus' }, { value: "Impala", label: "Impala"}, {value: "Prius", label: "Prius"}]
  const makes = [{ value: 'Ford', label: 'Ford' },{ value: 'Chevrolet', label: 'Chevrolet'}, {value: "Toyota", label: 'Toyota'}, {value: "Volkswagen", label: "Volkswagen" }]
  const [ value1, setValue1 ] = useState(2000);
  const [ value2, setValue2 ] = useState(2050);
  const [ filterBy, setFilterBy ] = useState({make: [], model: [], yearMin: 2000, yearMax: 2050});


  return (
    <>
      <div>
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
              <span>Min: {value1}</span>
              <Form.Control name="year-min" type="range"
                value={value1}
                onChange={sliderChange}
                min={2000}
                max={2050}
              />
            </Col>
            <Col xs="6">
              <span>Max: {value2}</span>
              <Form.Control name="year-max" type="range"
                value={value2}
                onChange={e => {
                  if (e.target.value < value1) setValue1(e.target.value)
                  setValue2(e.target.value)}}
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