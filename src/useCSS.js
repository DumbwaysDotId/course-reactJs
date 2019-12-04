import React,{Component} from 'react';
import './App.css';

const style = {
    bigBlue: {
        fontSize: "50px",
        color : "blue",
        fontWeight: "bold"
    },
    smallPink: {
        fontSize: "25px",
        color: "pink",
        fontWeight: "bold"
    },
    bigOrange: {
        fontWeight: "bold",
        color: "orange",
        fontSize: "50px"
    }
}


class useCSS extends Component {
    render(){
      return (
      <div className="App">
          <p style={{color:"red"}}>This Is Red</p>
          <p style={style.bigBlue}>This Is Blue</p>
          <p style={style.smallPink}>This Is Pink</p>
          <p style={style.bigOrange}>This Is Orange</p>
      </div>
    );
    } 
  }
  
  export default useCSS;