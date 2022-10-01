import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  let name = "Owen Sit";
  return (
    <>
      <h1>{`Good morning, ${name}`}</h1>
    </>
  );
};

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. HAHA
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

export default App;
