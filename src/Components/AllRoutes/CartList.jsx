import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import PaymentForm from "./PaymentForm";
import SubmitOrder from "./SubmitOrder";
import {Link} from "react-router-dom"
function CartList({ cart }) {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div
      classsName="container"
      style={{
        width: "95%",
        border: "1px solid red",
        display: "flex",
        margin: "auto",
        padding: "0.5rem",
        justifyContent: "space-around",
        gap: "1rem",
      }}
    >
      <div
        className="cart-total-items"
        style={{ width: "55%", border: "1px solid black" }}
      >
        {" "}
        {CART?.map((cartItem, cartindex) => {
          return (
            <div style={{ width: "100%" }}>
              <ListGroup>
                <ListGroup.Item
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    justifyContent: "space-around",
                    textAlign: "center",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <h2>{cartItem.title}</h2>
                    <p> {cartItem.desc}</p>
                  </div>
                  <div style={{ margin: "auto" }}>
                    <img src={cartItem.img} style={{ width: "100%" }} />
                  </div>
                  <div style={{ margin: "auto" }}>
                    <Button
                      variant="dark"
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartindex === index
                            ? {
                                ...item,
                                quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 0,
                              }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      -
                    </Button>
                    <span> {cartItem.quantity} </span>
                    <Button
                      variant="dark"
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartindex === index
                            ? { ...item, quantity: item.quantity + 1 }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      +
                    </Button>
                    <span> Rs. {cartItem.price * cartItem.quantity} </span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          );
        })}
      </div>
      <div
        className="total-bill"
        style={{ width: "45%", border: "1px solid black" }}
      >
        <PaymentForm />
        <div>
          <p>
            <strong>Net Amount :</strong>
            <strong>
              {CART.map((item) => item.price * item.quantity).reduce(
                (total, value) => total + value,
                0
              )}
            </strong> <strong>$</strong> 
          </p>
        </div>
        {/* <Button variant="dark"> <Link to="/finalPayment">Place Order</Link> </Button> */}
      </div>
    </div>
  );
}
export default CartList;