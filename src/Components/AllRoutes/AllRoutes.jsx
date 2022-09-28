import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";
import Men from "./Men";
import Additem from "./Additem";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men/>}/>
        <Route path="/additem" element={<Additem/>}/>
      </Routes>
    </div>
  );
}
export default AllRoutes;
