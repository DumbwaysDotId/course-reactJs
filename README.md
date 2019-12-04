# React Router Dom

  in reactJs it's a little different from HTML for switching between pages, for reactJs we need to use a library called React-router-dom

# How To Install React Router Dom

- to install install router dom on reactjs is quite easy we just need to type the code in the terminal before entering the code we first enter the project that we have.
 
  example:
  ```
  $ npm install react-router-dom
  ```
 
## Basic Usage React Router Dom

 - First import the required pages and react-router-dom components

    ```
    import React,{Component} from 'react';
    import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
    
    import Home from "./Home";
    import Increment from "./Increment";
    import List from "./listReact";
    ```
  
  - the second stage we make the navigation first to move pages from page one to another page
  
    ```
    class App extends Component {
    render(){
     return (
      <Router>
       <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Increment">Increment</Link>
            </li>
            <li>
              <Link to="/List">List</Link>
            </li>
          </ul>
        </nav>
      ```
      
   - the third stage we enter which pages are included in our web navigation to move from page to page
   
	```
	{/* A <Switch> looks through its children <Route>s and
	    renders the first one that matches the current URL. */}
	<Switch>
	  <Route path="/List">
	    <List />
	  </Route>
	  <Route path="/Increment">
	    <Increment />
	  </Route>
	  <Route path="/">
	    <Home />
	  </Route>
	</Switch>
	</div>
	</Router>
	);
	}
	}

	export default App;
	```
   - Full Code
    
	```
	import React,{Component} from 'react';
	import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
	  Link
	} from "react-router-dom";

	import Home from "./Home";
	import Increment from "./Increment";
	import List from "./listReact";


	class App extends Component {
	render(){
	return (
	<Router>
	<div>
	<nav>
	  <ul>
	    <li>
	      <Link to="/">Home</Link>
	    </li>
	    <li>
	      <Link to="/Increment">Increment</Link>
	    </li>
	    <li>
	      <Link to="/List">List</Link>
	    </li>
	  </ul>
	</nav>

	{/* A <Switch> looks through its children <Route>s and
	    renders the first one that matches the current URL. */}
	<Switch>
	  <Route path="/List">
	    <List />
	  </Route>
	  <Route path="/Increment">
	    <Increment />
	  </Route>
	  <Route path="/">
	    <Home />
	  </Route>
	</Switch>
	</div>
	</Router>
	);
	}
	}

	export default App;
	```
