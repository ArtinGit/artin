import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Thnx from './components/thnx'
import Coin from './components/coin'
import Coinn from './components/coinn'
import Coine from './components/coine'
import Coind from './components/coind'
import Coina from './components/coina'
import Coinbnb from './components/coinbnb'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/featured" element={<Featured/>}/>
        <Route path="/earn" element={<Signup/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/thnx" element={<Thnx/>}/>
        <Route path="/coin" element={<Coin/>}/>
        <Route path="/coinn" element={<Coinn/>}/>
        <Route path="/coine" element={<Coine/>}/>
        <Route path="/coind" element={<Coind/>}/>
        <Route path="/coina" element={<Coina/>}/>
        <Route path="/coinbnb" element={<Coinbnb/>}/>
      </Routes>
      </Router>

      // <Hero />
      // <Featured />
      // <Signup />
      // <Footer />
    
  );
}

export default App;
