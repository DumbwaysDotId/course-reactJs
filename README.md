# Styling in ReactJs

  so the same as HTML reacts can also use styling on CSS but there are a few improvements where in reacts can use 2 methods in writing properties on css

First use a method like this:

 Example:
  background-color
  
 Two can use like this:
 
 Example:
   backgroundColor

# How to define CSS in reactJs

   css defining reacts in general there are 3 ways of delivery:
  
  - Inline CSS
   this method is least recommended because it makes the code structure less tidy
   
   Example :
   ```
   <p style={{color:"red"}}>This Is Red</p>
   ```
   
   - Internal CSS
     this method is quite often used, but in my personal opinion it is less effective because it is still in the same file so if you want to use it again on other files it will not be used again.
     
     the first step we make first a variable with the name style.
     
     Example :
     ```
     ...
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
     ...
     ```
     then to use it we can write it like this:
     
     example:
     ```
      <p style={style.bigBlue}>This Is Blue</p>
     ```
     
   - External CSS
     this method is most recommended because the css file is separated so the code looks more tidy and can be reused.
     
     First, first create a CSS file named App.css
     
     Example :
     ```
     .App {
	  text-align: center;
      }

      .App-logo {
	  height: 40vmin;
       }
       
       .App-content {
	  background-color: #282c34;
	  min-height: 100vh;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  font-size: calc(10px + 2vmin);
	  color: white;
	 }
	 .App-link {
	  color: #09d3ac;
	  }
       ```
       the second import css file that was created earlier in the reactjs file.
       
       Example :
       ```
       ...
       import './App.css';
       ...
       ```
       the last step to use external css, we can use the className property
       
       Example :
       
       ```
        <div className="App">
       ```
