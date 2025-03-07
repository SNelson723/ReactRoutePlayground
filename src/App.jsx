import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App