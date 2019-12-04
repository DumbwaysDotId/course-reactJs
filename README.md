# Flex

  Flexbox css that u know. It is divide screen equally by comparison such as 1: 2, 1: 1 etc. That is useful to provide a consistent layout on different screens.

# Try Flex

the first thing we have to make is a new project like the one below.
  Example : 
  ```
  import React,{Component} from 'react';
  import './App.css';


class flexCSS extends Component {
    render(){
      return (
        <div>
            <div style={{width:"50px", height:"50px", backgroundColor: "powderblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "skyblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "steelblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "powderblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "steelblue"}}></div>
        </div>
        
    );
    } 
  }
  
  export default flexCSS;
  ```
  
  *to try the flex property below you can add a script like the one below, you can edit it in the div tag section to be like this*
  
- flexDirection.

  Determine the direction (direction) that will apply to items in the flexbox container. The intended direction is whether you want to point in a line / horizontal (from left to right or vice versa) or like a column / vertical (from top to bottom or vice versa).
  
  example:
  ```
  ...
    <div style={{flex:1, flexDirection:"row", display:"flex"}}>
  ...
  ```
 
- justifyContent.

  justify-content is used to align items between flexboxes so that the containers of the flexbox can distribute the remaining free space when the flex items in one line are not flexible or even though they have reached the maximum size limit.
  
  example:
  ```
  ...
     <div style={{display:"flex", flexDirection:"column", justifyContent: "space-between", height: "100vh"}}>
  ...
  ```
  
  - alignItems.

  align-items defines how the items in the flex container are placed along a perpendicular line on the main axis (cross-axis). This is the same as justify-content but just a different placement.
  
  example:
  ```
  ...
   <div style={{display:"flex", flexDirection:"column", justifyContent: "center", height: "100vh", alignItems: "center"}}>
  ...
  ```
 
