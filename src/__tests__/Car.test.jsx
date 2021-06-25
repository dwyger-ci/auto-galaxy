import Car from '../components/Car'
import { render, screen } from '@testing-library/react'
import CarPage from '../pages/CarPage';
import axios from 'axios';
import { MemoryRouter } from 'react-router';

it("render props", () => {
  render(<Car car={{
      available: true,
      color: "Black",
      id: "ede75bf3-b8e3-415d-9eb2-ff9071b16e31",
      image: "https://via.placeholder.com/200",
      make: "Fighter",
      model: "Tie Fighter",
      price: "560.28",
      year: 2020
  }}/>)
  expect(screen.getByText(/Fighter/i)).toBeVisible();
  expect(screen.getByText(/Tie Fighter/i)).toBeVisible();
  expect(screen.getByText(/2020/i)).toBeVisible();
  expect(screen.getByText(/560.28/i)).toBeVisible();
})

jest.mock('axios')

it("car page should render", () => {

  // jest.spyOn(axios, "get").mockReturnValue({
  //   Promise.resolve(
  //     data: {
  //       available: true,
  //       color: "Black",
  //       id: "ede75bf3-b8e3-415d-9eb2-ff9071b16e31",
  //       image: "https://via.placeholder.com/200",
  //       make: "Fighter",
  //       model: "Tie Fighter",
  //       price: "560.28",
  //       year: 2020
  //     }
  //   )
  // })

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
      id: 'ede75bf3-b8e3-415d-9eb2-ff9071b16e31'
    })
  }));

  render(<MemoryRouter initialEntries={["/ede75bf3-b8e3-415d-9eb2-ff9071b16e31" ]}><CarPage /></MemoryRouter>)

  expect(screen.getByText(/Fighter/i)).toBeVisible();
  expect(screen.getByText(/Tie Fighter/i)).toBeVisible();
  expect(screen.getByText(/2020/i)).toBeVisible();
  expect(screen.getByText(/560.28/i)).toBeVisible();
})
