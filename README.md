# Handle Event

  Use a component called Button or a href to play with the ReactJs event. For example, our compilation of rejects something will change the subject

- Make Button & Function Handle Alert 
  
  The first thing I will try is to make a button and function 
  
  example:
  ```
  ...
   <button onClick={(event) => {alert("Hallo Siswa Bootcamp B#13")}}> Click Me </button>
  ...
  ```
  
  Full example Handle Event:
  
    ```
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
			 <button onClick={(event) => {alert("Hallo Siswa Bootcamp B#13")}}>Click Me</button>
		</div>
	    );
	  }
	}
    ```
