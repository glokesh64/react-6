import React, { Component } from 'react'
import Navbar from "./pulinav/Navbar";
import Home from './pulinav/message';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
            
        </Router>      
      </>
    )
  }
}
// function App() {

// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
