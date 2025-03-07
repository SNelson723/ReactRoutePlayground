import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <div className="w-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App