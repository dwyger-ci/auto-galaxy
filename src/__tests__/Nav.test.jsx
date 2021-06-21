import Nav from '../components/Nav'
import { render, screen } from '@testing-library/react'

it("should render",()=> {
  render(<Nav/>)
})

it("render props", () => {
  render(<Nav/>)
  expect(screen.getByText(/Nav/i)).toBeVisible();
})