import { Col, Container, Row} from "react-bootstrap"
import { useHistory } from "react-router"
import CarCard from "../components/CarCard"
import { VariableSizeGrid as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { forwardRef } from "react";

const GUTTER_SIZE = 5;
const COLUMN_WIDTH = 300;
const ROW_HEIGHT = 150;

const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const CarList = (cars) => {
  const { push } = useHistory()

  const Cell = ({ columnIndex, rowIndex, style }) => (
    // <div className={"GridItem"} key={cars.cars[(rowIndex * 3) + columnIndex].id} onClick={() => push(`/${cars.cars[(rowIndex * 3) + columnIndex].id}`)}
    // style={{
    //   ...style,
    //   left: style.left + GUTTER_SIZE,
    //   top: style.top + GUTTER_SIZE,
    //   width: style.width - GUTTER_SIZE,
    //   height: style.height - GUTTER_SIZE
    // }}
    // >
    //   <CarCard singleCar={cars.cars[(rowIndex * 3) + columnIndex]} />
    // </div>
    <div className={"GridItem"}
    style={{
      ...style,
      left: style.left + GUTTER_SIZE,
      top: style.top + GUTTER_SIZE,
      width: style.width - GUTTER_SIZE,
      height: style.height - GUTTER_SIZE
    }}
    >
      r{(rowIndex * 3) + columnIndex}
    </div>
  );

  const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        paddingLeft: GUTTER_SIZE,
        paddingTop: GUTTER_SIZE
      }}
      {...rest}
    />
  ));

  console.log(cars)
  return <Container>
      <List
        className="List"
        columnCount={3}
        columnWidth={index => columnWidths[index]}
        height={350}
        innerElementType={innerElementType}
        rowCount={100}
        rowHeight={index => rowHeights[index]}
        width={800}
      >
        {Cell}
      </List>
  </Container>


}

export default CarList