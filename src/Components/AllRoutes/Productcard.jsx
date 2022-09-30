import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Productcard({ data, addToCart }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      {data.map((productItem, productIndex) => (
        <Card key={productIndex}>
          <Card.Img
            variant="top"
            src={productItem.img}
            style={{ width: "100%", objectFit: "fill" }}
          />
          <Card.Body>
            <Card.Title>
              <Button variant="light" className="btn-womens">
                {productItem.title}
              </Button>
            </Card.Title>
            <Card.Text
              style={{
                margin: "auto",
                textAlign: "left",
                fontSize: "0.8rem",
                justifyContent: "start",
              }}
            >
              {productItem.desc}
            </Card.Text>
            <Card.Text
              style={{
                color: "blue",
                padding: "0.2rem",
                margin: "auto",
                textAlign: "left",
                textTransform: "capitalize",
              }}
            >
              <strong>{productItem.category}</strong>
            </Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <Card.Text style={{ color: "black" }}>
                  <strike>{productItem.strikedOffPrice}$</strike>
                </Card.Text>
                <Card.Text style={{ color: "red" }}>
                  <strong>{productItem.price}$</strong>
                </Card.Text>
              </div>
              <div>
                <Button
                  onClick={() => addToCart(productItem)}
                  variant="success"
                  size="sm"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default Productcard;
