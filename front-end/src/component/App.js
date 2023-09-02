import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Router>
    <div>

      <Header></Header>
      {/* <Main></Main> */}
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/clubs" element={<Main></Main>}></Route>
        <Route path="/events" element={<Main></Main>}></Route>
        <Route path="/feedback" element={<Main></Main>}></Route>
        <Route path="/contact" element={<Main></Main>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
    // </Router>
  );
}

export default App;
