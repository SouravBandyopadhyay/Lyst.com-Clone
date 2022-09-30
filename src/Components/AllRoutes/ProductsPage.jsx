import { useEffect, useState, useContext } from "react";
import db from "../db.json";
import Productcard from "./Productcard";
import "../Styles/Women.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { AppContext } from "../Context/AppContext";
import CartList from "./CartList";
import Header from "./Header";
function ProductsPage() {
  const [data, setData] = useState(db);
  const [gender, setGender] = useState(db);
  let { authState, toggleAuth, setToken } = useContext(AppContext);
  const handleAsc = () => {
    const userData = [...db].sort((a, b) => Number(a.price) - Number(b.price));
    // console.log(userData);
    setData(userData);
  };
  const handleDesc = () => {
    const userData = [...db].sort((a, b) => Number(b.price) - Number(a.price));
    setData(userData);
  };
  const findMale = (male) => {
    const userGender = db.filter((el) => el.gender === male);
    setData(userGender);
  };
  const findFemale = (women) => {
    const userGender = db.filter((el) => el.gender === women);
    setData(userGender);
  };

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const addToCart = (elem) => {
    setCart([...cart, { ...elem, quantity: 1 }]);
  };
  console.log("cart", cart);
  const handleShow = (value) => {
    setShowCart(value);
  };
  return (
    <>
      <div>
        <Header count={cart.length} handleShow={handleShow} />
      </div>
      <div>
        {showCart ? (
          <CartList cart={cart} />
        ) : (
          <div className="products-box">
            <div className="card-filtering-box">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Sort By Price</Accordion.Header>
                  <Accordion.Body>
                    <Button variant="outline-info" onClick={handleAsc}>
                      Ascending
                    </Button>
                    <Button variant="outline-info" onClick={handleDesc}>
                      Descending
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Gender</Accordion.Header>
                  <Accordion.Body>
                    <Button
                      variant="outline-info"
                      onClick={() => {
                        findMale("male");
                      }}
                    >
                      Male
                    </Button>
                    <Button
                      variant="outline-info"
                      onClick={() => {
                        findFemale("women");
                      }}
                    >
                      Female
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="cards-box-display">
              <Productcard data={data} addToCart={addToCart} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default ProductsPage;
