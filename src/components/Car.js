const Car = (car) => {
  if (car) {
    return <div>Here's a car {car.car.make} {car.car.model} {car.car.year} {car.car.price}</div>
  }
  return null
}

export default Car