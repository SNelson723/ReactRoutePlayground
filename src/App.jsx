import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import About from './Pages/About';

const App = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App