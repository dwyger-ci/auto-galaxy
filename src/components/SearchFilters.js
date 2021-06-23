import { Form,Row,Col } from "react-bootstrap"
import { useState } from "react"
import Select from 'react-select'

const SearchFilters = () => {
  const onSelectedOptionsChange = (e) => {
    switch(e.target.name) {
      case "make":
        console.log(e.target.value)
        break
      case "model":
        console.log(e.target.value)
        break
      case "year-min":
        console.log(e.target.value)
        break 
      case "year-max":
        console.log(e.target.value)
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
  const [ filterBy, setFilterBy ] = useState({make: [], model: [], year: {min: 0, max: 2050}});

  return (
    <>
      <div>
        <h2>Vehicle Filters</h2>
        <Form>
          <Form.Group>
            <Form.Label>Make</Form.Label>
            <Select
              isMulti
              name="make"
              options={makes}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            {/* <Form.Control name="make" as="select" multiple value={makes} onChange={onSelectedOptionsChange}>
              {makes.map((option,index) => (
                <option key={index} value={option}>
                  {option.name}
                </option>
              ))}
            </Form.Control> */}
            <br />
            <Form.Label>Model</Form.Label>
            <Form.Control name="model" as="select" multiple value={models} onChange={onSelectedOptionsChange}>
              {models.map((option,index) => (
                <option key={index} value={option}>
                  {option.name}
                </option>
              ))}
            </Form.Control>
            </Form.Group>
            <br />
            <Form.Label>Year</Form.Label>
            <Form.Group as={Row}>
              <Col xs="6">
                <span>Min: {value1}</span>
                <Form.Control name="year-min" type="range"
                  value={value1}
                  onChange={e => {
                    if (e.target.value > value2) setValue2(e.target.value)
                    setValue1(e.target.value)}}
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