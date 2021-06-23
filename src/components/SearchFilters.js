import { Form,Row,Col } from "react-bootstrap"
import { useState } from "react"

const SearchFilters = () => {
  const onSelectedOptionsChange = () => {}
  const models = ["Focus","Impala","Prius","Bug","M3","Commander","Millenium Falcon"]
  const makes = ["Ford","Chevrolet","Toyota","Volkswagen","BMW","Kia","Jeep","Spacefreighter"]
  const [ value1, setValue1 ] = useState(2000);
  const [ value2, setValue2 ] = useState(2050);
  return (
    <>
      <div>
        <h2>Vehicle Filters</h2>
        <Form>
          <Form.Group>
            <Form.Label>Make</Form.Label>
            <Form.Control as="select" multiple value={makes} onChange={onSelectedOptionsChange}>
              {makes.map((option,index) => (
                <option key={index} value={option}>
                  {option.name}
                </option>
              ))}
            </Form.Control>
            <br />
            <Form.Label>Model</Form.Label>
            <Form.Control as="select" multiple value={models} onChange={onSelectedOptionsChange}>
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
                <Form.Control type="range"
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
                <Form.Control type="range"
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