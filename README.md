# List in Reactjs

  in making a list of reacts we can use a map () function, while the function of this map is to render a data in the array that has been made for an example like below

- First here I already have a file with the name listReact which is as follows
 
  example:
  ```
  ...
  class listReact extends Component {
    render(){
        const cars = ["Mercedes-Benz","BMW","Audi","Lambhorghini"];
      return (
        <div className="App">
            {cars.map((car)=>(<p>{car}</p>))}
        </div>
        
    );
    } 
  }
  export default listReact;
  ```
 *general form of map () {name_array.map(initials)}*
 
- secondly I will import the file in the app.js file
  ```
  ...
  import List from './listReact';
  ...
  class Content extends Component {
  getBacth(){
    return 12+1;
  }
  render(){
    const companyName = "DumbWays.id";
    return (
  <div className="App-content">
    <List />
  </div>
  ...

  ```
