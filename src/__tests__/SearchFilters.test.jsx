import SearchFilters from '../components/SearchFilters'
import { render, screen } from '@testing-library/react'

it("should render",()=> {
  render(<SearchFilters/>)
})

it("should render filter options", () => {
  render(<SearchFilters />)
  expect(screen.getByText(/Filters/i)).toBeVisible();
})