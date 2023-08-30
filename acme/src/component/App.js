import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Header from "./Header";
// import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Main></Main>
      {/* <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes> */}
      
      <Footer></Footer>
    </>
  );
}

export default App;
