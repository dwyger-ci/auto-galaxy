import { render, screen, waitFor } from '@testing-library/react'
import SearchFilters from '../components/SearchFilters'
import axios from "axios"
import userEvent from '@testing-library/user-event'

// jest.mock('axios')

// it("Models should populate", async () => {
//   jest.spyOn(axios, "get")

//   render(<SearchFilters />)
//   const makeSelect = screen.getByTestId("makes-select")
//   await waitFor(() => expect(makeSelect).toBeInTheDocument());
//   userEvent.click(makeSelect);

//   await waitFor(() => expect(screen.getByText(/Value1/i)).toBeInTheDocument())
// })