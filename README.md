# Props

  Most components can be customized when they are created, with different parameters. These creation parameters are called props, short for properties. If in html commonly called attributes, such as id, class, onclick, etc.

# Difine Props

- For example, one basic ReactJs component is the Image. When you create an image, you can use a prop named source to control what image it shows.
 
  example:
  ```
  ...
   <img src= {'http://www.youloveit.com/uploads/posts/2019-02/1550499042_youloveit_com_disney_frozen_2_wallpapers08.jpg'}style {{width:"50%", height: "50%"}}/><br></br>\
  ...
  ```
  *in the example above is the default props or attributes in the img tag*
  
- Your own components can also use props.

  example:
  ```
  import React,{Component} from 'react';
  import './App.css';
  ...
  <Header title="This is Header"/>
  ...
  ```
  *from defining the props above, there is the name of the props is **title** and value props is **This is header***
  
## How to use props on the own component

 - If the component definition is a class component

    Use *this.props.name_props* inside the function of class component, for example in render, componentDidMount, etc, or custom function.

    ```
    ...
    class Header extends Component {
    render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
        );
      }
    }
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
	      <Header title="This is Header"/>
	      <Content />
	    </div>
	  );
	  }
	}
	class Header extends Component {
	  render(){
	    return (
	      <div>
		<h1>{this.props.title}</h1>
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
