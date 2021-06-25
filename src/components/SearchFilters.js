import { Form,Row,Col } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import Select from 'react-select'
import { VehiclesContext } from "../contexts/VehiclesContext"
import axios from 'axios'
const modelsApi ="http://localhost:5000/api/models"
const makesApi ="http://localhost:5000/api/makes"


const SearchFilters = () => {
  const onSelectedOptionsChange = (selectedArray, action) => {
    const initialMakeState = filter.make.length > 0 ? filter.make : [];
    const initialModelState = filter.model.length > 0 ? filter.model : [];
    const yearMin = filter.yearMin !== 2000 ? filter.yearMin : 2000;
    const yearMax = filter.yearMin !== 2050 ? filter.yearMax : 2050;
    switch(action.name) {
      case "make":
        setFilter({make: selectedArray, model: initialModelState, yearMin: yearMin, yearMax: yearMax})

        break
      case "model":
        setFilter({make: initialMakeState, model: selectedArray, yearMin: yearMin, yearMax: yearMax})
        break
      default:
        console.log("YOU FOOL")
        break
    }
  }
  const sliderChange = (e) => {
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
  
  const { filter, setFilter, models, makes } = useContext(VehiclesContext);

  return (
    <>
      <div className="filter-box">
        <h2>Vehicle Filters</h2>
        <Form>
          <Row>
            <Col m={6}>
              <Form.Group>
                <Row>
                  <Col m={3}>
                    <Form.Label>Make</Form.Label>
                    <Select
                      isMulti
                      name="make"
                      options={makes}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={onSelectedOptionsChange}
                      data-testid="makes-select"
                    />
                  </Col>
                  <Col m={3}>
                    <Form.Label>Model</Form.Label>
                    <Select
                      isMulti
                      name="model"
                      options={models}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={onSelectedOptionsChange}
                      data-testid="models-select"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col m={6}>
              <Form.Label>Year</Form.Label>
              <Form.Group>
                <Row>
                  <Col m={6}>
                    <span>Min: {filter.yearMin}</span>
                    <Form.Control name="year-min" type="range"
                      value={filter.yearMin}
                      onChange={sliderChange}
                      min={2000}
                      max={2050}
                    />
                  </Col>
                  <Col m={6}>
                    <span>Max: {filter.yearMax}</span>
                    <Form.Control name="year-max" type="range"
                      value={filter.yearMax}
                      onChange={sliderChange}
                      min={2000}
                      max={2050}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default SearchFilters