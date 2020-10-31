import React, {Component} from 'react';
//JSXの構文。出力されるものをHTMLで直感的にかける
function App() {
  const greeting = "Hi!!";
  const dom = <h1 className="foo">{greeting}</h1>;
  return (
    <React.Fragment>
   
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={()=>{console.log("clicked")}} />
    
    </React.Fragment>
  )
}

//JSの構文 JSXの構文がこれに自動変換される
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello, world!"
//   );
// }

export default App;
