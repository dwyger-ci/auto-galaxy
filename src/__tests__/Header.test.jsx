import Header from '../components/Header'
import { render, screen } from '@testing-library/react'

it("should render",()=> {
  render(<Header/>)
})

it("render props", () => {
  render(<Header/>)
  expect(screen.getByText(/Galactic Auto/i)).toBeVisible();
  expect(screen.getByTestId('header-logo')).toBeVisible();
})