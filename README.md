# Component

a ReactJs Class or sometime a Function that is part of the UI.
For example: Button, NavBar, Footer, Card, etc. Combine it like a puzzle to build an amazing app!

## Define Component

- Class Component

  The requirement for creating class components is extends Component of lib react. And use the render function to define JSX syntax.

  example:
  ```
  ...
  class Header extends Component {
  render(){
    return (
      <div>
        <h1>This is Header</h1>
      </div>
    );
  }
 }
 ...
 ```



## How to use component

  - Add to JSX

  	example:
    ```
	<Header />
    ```
    
    Full example how to use component:
    ```
	./App.js
    
    ...
    // import component
    import Header from './Header';
    import Content from './Content';

    // create class component
    class App extends Component {

      // use the render function to define the component appearance
      render() {
        return (
          <View style={styles.container}>
            <Header />
            <Content />
          </View>
        )
      }
    }
	...
    ```

    There are two component terms based on their placement, namely the parent component and the child component,
in the example above, the Header and Content components are called child components, while the App component is called the parent component
