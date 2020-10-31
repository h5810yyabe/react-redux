import React, {Component} from 'react';
//JSXの構文。出力されるものをHTMLで直感的にかける
function App() {
  return (
    <h1>
      Hello, world!
    </h1>
  );
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
