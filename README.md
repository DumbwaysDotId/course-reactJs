# Material-Ui

  material-ui is one of the CSS framework that supports reactJs, by using this CSS Framework it will be easier to download the website application.

# Installation Materila-Ui

- To install the Material-Ui, we can enter it first in our reactJs project, then we can type the code below
 
  example:
  ```
  // with npm
  npm install @material-ui/core
  
  // with yarn
  yarn add @material-ui/core
  ```
  
- Then to use it, we need to import the code as below

  example:
  ```
  import {name-component-material-ui} from '@material-ui/core';
  ```
  
## General Syntax of Material-ui Component

    ```
    import React,{Component} from 'react';
    import {Container,Button,Menu} from '@material-ui/core';
    import './App.css';
    
    class materialExample extends Component {
    render(){
        const cars = ["Mercedes-Benz","BMW","Audi","Lambhorghini"];
      return (
        <Container className="App">
            <Button variant="contained" color="primary">Hello This Is Button</Button>
        </Container>
    );
    } 
    }
    
    export default materialExample;
    ```
