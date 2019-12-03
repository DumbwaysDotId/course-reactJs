import React,{Component} from 'react';
import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
  }
}

class Header extends Component {
  render(){
    return (
      <div>
        <h1>This is Header</h1>
      </div>
    );
  }
}

class Content extends Component {
  getBacth(){
    return 12+1;
  }
  render(){
    const companyName = "DumbWays.id";
    return (
      <div className="App-content">
        <p>Welcome To {companyName} Batch {this.getBacth()}</p>
        <img src= {'http://www.youloveit.com/uploads/posts/2019-02/1550499042_youloveit_com_disney_frozen_2_wallpapers08.jpg'}style={{width:"50%", height: "50%"}}/><br></br>
        <button onClick={(event) => {alert("Hallo Siswa Bootcamp B#13")}}>
        Click Me
        </button>
      </div>
    );
  }
}


export default App;
