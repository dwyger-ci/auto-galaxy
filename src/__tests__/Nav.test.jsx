import Nav from '../components/Nav'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

it("should render",()=> {
  render(<Nav/>)
  expect(screen.getByText("Home")).toBeInTheDocument();
})

it("home should have root href", () => {

  render(<Nav />)
  
  expect(screen.getByText('Home')).toHaveAttribute('href', '/')
})

it("cart should have cart href", () => {

  render(<Nav />)
  
  expect(screen.getByTestId('cart-link')).toHaveAttribute('href', '/cart')
})
