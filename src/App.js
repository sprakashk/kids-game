
import './App.scss';
import Grid from './components/grid/Grid';
import Controls from './components/controls/Controls';
import { useState } from 'react';
import { CONTROLS, GRID_DATA } from './constants';

function App() {
  const [seletctedBox, setSeletedBox ] = useState(GRID_DATA[0]);

  const boxSelectHandler = (controlType) => {
    console.log("controlType", controlType)
    switch (controlType) {
      case CONTROLS.UP:
        setSeletedBox((prev) => {
          if(prev.row > 1) {
            return {...prev, row: prev.row-1, id: `${prev.row-1 }${prev.column}`, showWarning: false}
          } else {
            return {...prev, showWarning: true}
          }
        })
        break;
      case CONTROLS.DOWN:
        setSeletedBox((prev) => {
          if(prev.row < 3) {
            return {...prev, row: prev.row+1, id: `${prev.row+1 }${prev.column}`, showWarning: false}
          } else {
            return {...prev, showWarning: true}
          }
        })
        break;
      case CONTROLS.LEFT:
        setSeletedBox((prev) => {
          if(prev.column > 1) {
            return {...prev, column: prev.column-1, id: `${prev.row}${prev.column - 1}`, showWarning: false}
          } else {
            return {...prev, showWarning: true}
          }
        })
        break;
      case CONTROLS.RIGHT:
        setSeletedBox((prev) => {
          if(prev.column < 3) {
            return {...prev, column: prev.column+1, id: `${prev.row}${prev.column +1}`, showWarning: false}
          } else {
            return {...prev, showWarning: true}
          }
        })
        break;
      default:
        break;
    }
  }
  return (
    <div className="app">
      <Grid selecteItem={seletctedBox} />
      <Controls controlHandler={boxSelectHandler}/>
    </div>
  );
}

export default App;
