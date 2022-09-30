import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Women from "./ProductsPage";
import Additem from "./Additem";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "./ProductsPage";
import FinalPaymentPage from "./FinalPaymentPage";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productspage"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/finalPayment"
          element={
            <PrivateRoute>
              <FinalPaymentPage />
            </PrivateRoute>
          }
        />
        <Route path="/additem" element={<Additem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
