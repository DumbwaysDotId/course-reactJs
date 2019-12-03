# State

  There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

# Difine State

 Define the state in the constructor, so that the value initialization is done the first time the component is run.
 in this example problem we will create a function to add 1x each time we click the button
 
  example:
  ```
 class Increment extends Component {
    constructor(){
        super();
	//Define state Here
        this.state = {
            counter: 0
        }
    }
  ```
  *State data types are objects, properties in them, called name state counter, and their values are called state values 0.*
  
## Change Value State

To change the state value, use the setState function with the object parameter containing the state name and new state value
For example triggers run the setState function by using the default javascript function, counter + 1

    ```
    ...
    <button onClick={()=> this.setState({counter: this.state.counter + 1})}>
    ...
    ```
 
 ## How to use state
 
 How to use state is almost the same as how to use props, just this.state.name_state
 
    ```
     <p>{this.state.counter}</p>
    ```
    
  Full example State Component Increment:
  
    ```
    	import React,{Component} from 'react';
	import './App.css';
	class Increment extends Component {
	    constructor(){
		super()
		this.state = {
		    counter: 0
		}
	    }
	    render(){
	      return (
	      <div className="App">
		  <p>Click The Button to Increment ! !</p>
		  <button onClick={()=> this.setState({counter: this.state.counter + 1})}>
		  <p>{this.state.counter}</p></button>
	      </div>
	    );
	    } 
	  }
    ```

   and at the end we will import this component increase in the js application
   ```
   	import Increment from './Increment';

	...
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
		</button> <br></br>
		<Increment/>
	      </div>
	    );
	  }
	}
	...
   ````
