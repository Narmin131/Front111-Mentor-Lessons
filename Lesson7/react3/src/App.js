import React from 'react'
import FunctionComponents from './components/FunctionComponents'
import ClassComponent from './components/ClassComponent'
import Home from './pages/Home'
import About from "./pages/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/Header'
import Footer from "./common/Footer"

const App = () => {
  return (
    <div>
      {/* <FunctionComponents /> */}
      {/* <ClassComponent/> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<About />} path='/about'></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App