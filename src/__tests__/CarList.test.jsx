import CarList from '../components/CarList'
import { render, screen } from '@testing-library/react'
import cars from '../assets/cars.json'

it("should render",()=> {
  render(<CarList/>)
})

it("should render an array of cars", () => {
  render(<CarList cars={cars} />)
  expect(screen.getByText(/Ford/i)).toBeVisible();
  expect(screen.getByText(/Honda/i)).toBeVisible();
})