import React from 'react';
//functional component
function App() {
  const greeting = "Hi!!";
  const dom = <h1 className="foo">{greeting}</h1>;
  return (
    <Cat></Cat>
  )
}

const Cat = () =>{
  return <div>Meow!</div>;
}

//class component
// class App extends Component{
//   render(){
//     return(<div>hello world</div>)
//   }
// }


export default App;
