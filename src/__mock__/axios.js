const apiResponse = {
  available: true,
  color: "Black",
  id: "ede75bf3-b8e3-415d-9eb2-ff9071b16e31",
  image: "https://via.placeholder.com/200",
  make: "Fighter",
  model: "Tie Fighter",
  price: "560.28",
  year: 2020
}

module.exports = {
  get: () => {
      return Promise.resolve({
          data: apiResponse
      });
  }
};