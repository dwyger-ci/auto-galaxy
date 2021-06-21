import Footer from '../components/Footer'
import { render, screen } from '@testing-library/react'

it("should render",()=> {
  render(<Footer/>)
})

it("render props", () => {
  render(<Footer/>)
  expect(screen.getByText(/Copyright 2021/i)).toBeVisible();
})