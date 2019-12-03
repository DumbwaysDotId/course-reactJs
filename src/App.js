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
  render(){
    return (
      <div className="App-content">
        <p>Welcome To DumbWays.id</p>
      </div>
    );
  }
}


export default App;
