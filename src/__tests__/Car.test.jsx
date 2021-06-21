import Car from '../components/Car'
import { render, screen } from '@testing-library/react'


it("should render",()=> {
  render(<Car/>)
})

it("render props", () => {
  render(<Car make="Fiesta" model="Ford" year="2002" price="$2.00"/>)
  expect(screen.getByText(/Fiesta/i)).toBeVisible();
  expect(screen.getByText(/Ford/i)).toBeVisible();
  expect(screen.getByText(/2002/i)).toBeVisible();
  expect(screen.getByText(/\$2/i)).toBeVisible();
})