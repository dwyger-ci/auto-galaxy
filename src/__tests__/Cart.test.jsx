import Cart from '../components/Cart'
import { render, screen } from '@testing-library/react'

it("render props", () => {
  render(<Cart />)
  expect(screen.getByText(/This is the cart/i)).toBeInTheDocument()
})