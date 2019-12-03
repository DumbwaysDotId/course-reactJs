# Embedding Expression in JSX

  Jsx are code that we have created before, such as <div> and <p>. Now how to embed expression (variable, function, etc) on it? 

- Make Function
  
  The first thing I will try is to make a function and a variable first 
  
  example:
  ```
  ...
   getBacth(){
    return 12+1;
  }

  render(){
    const companyName = "DumbWays.id";
  ...
  ```

## Define Embedding Expression in JSX

- Define Embedding Expression

  to embed on JSX is very easy we just need to add "{}"
  example:
    ```
	 <p>Welcome To {companyName} Batch {this.getBacth()}</p>
    ```
    
    Full example Embedding Expression in JSX:
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
      	      </div>
	    );
	  }
	}
    ```
