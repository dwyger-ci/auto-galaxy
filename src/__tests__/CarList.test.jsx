import CarList from '../components/CarList'
import { render, screen, fireEvent } from '@testing-library/react'
import cars from '../assets/cars.json'
import { FixedSizeList } from 'react-window'


jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: jest.fn()
  })
}));

it("should render an array of cars", () => {
  render(<CarList cars={cars} />)
  expect(screen.getByText(/Ford/i)).toBeVisible();
  expect(screen.getByText(/Honda/i)).toBeVisible();
})

it("should add vehicle to cart on button click if available", () => {
  render(<CarList cars={[
    {
      available: true,
      color: "Black",
      id: "ede75bf3-b8e3-415d-9eb2-ff9071b16e31",
      image: "https://via.placeholder.com/200",
      make: "Fighter",
      model: "Tie Fighter",
      price: "560.28",
      year: 2020
    }
  ]} />)
  const addToCartButton = screen.getByTitle("Add to Cart")
  expect(addToCartButton).toBeInTheDocument()
  expect(addToCartButton).toHaveTextContent("Add to Cart")
  fireEvent.click(addToCartButton)
  expect(addToCartButton).toHaveTextContent("Remove from Cart")
})

it("should add vehicle to cart on button click if available", () => {
  render(<CarList cars={[
    {
      available: false,
      color: "Black",
      id: "ede75bf3-b8e3-415d-9eb2-ff9071b16e31",
      image: "https://via.placeholder.com/200",
      make: "Fighter",
      model: "Tie Fighter",
      price: "560.28",
      year: 2020
    }
  ]} />)
  const addToCartButton = screen.getByTitle("Add to Cart")
  expect(addToCartButton).toBeInTheDocument()
  expect(addToCartButton).toHaveTextContent("Add to Cart")
  fireEvent.click(addToCartButton)
  expect(addToCartButton).toHaveTextContent("Remove from Cart")
})
