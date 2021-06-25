import { Col, Container, Row} from "react-bootstrap"
import { useHistory } from "react-router"
import CarCard from "../components/CarCard"
import { VariableSizeGrid as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { forwardRef, useContext } from "react";
import { VehiclesContext } from "../contexts/VehiclesContext";

const GUTTER_SIZE = 5;
const COLUMN_WIDTH = 300;
const ROW_HEIGHT = 150;

const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const CarList = () => {
  const { push } = useHistory()
  const { viewData: cars } = useContext(VehiclesContext)
  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div className={"GridItem"} key={((rowIndex * 3) + columnIndex)} onClick={() => push(`/${cars[(rowIndex * 3) + columnIndex].id}`)}
    style={{
      ...style,
      left: style.left + GUTTER_SIZE,
      top: style.top + GUTTER_SIZE,
      width: style.width - GUTTER_SIZE,
      height: style.height - GUTTER_SIZE
    }}
    >
      <CarCard singleCar={cars[(rowIndex * 3) + columnIndex]} />
    </div>
    // <div className={"GridItem"}
    // style={{
    //   ...style,
    //   left: style.left + GUTTER_SIZE,
    //   top: style.top + GUTTER_SIZE,
    //   width: style.width - GUTTER_SIZE,
    //   height: style.height - GUTTER_SIZE
    // }}
    // >
    //   r{(rowIndex * 3) + columnIndex}
    // </div>
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

  if (cars.length === 0) return null
  return <>
    <AutoSizer>
      {({ height, width }) => (
        <List
        className="List"
        columnCount={3}
        columnWidth={index => columnWidths[index]}
        height={height}
        // innerElementType={innerElementType}
        rowCount={100}
        rowHeight={index => rowHeights[index]}
        width={width}
      >
        {Cell}
      </List>
       )}
     </AutoSizer>
  </>
}

export default CarList