import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Productcard(el) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={el.img} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title>
            <Button variant="light" className="btn-womens">
              {el.title}
            </Button>
          </Card.Title>
          <Card.Text>{el.desc}</Card.Text>
          <Card.Text style={{ color: "blue", padding: "0.2rem" }}>
            <strong>{el.category}</strong>
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Card.Text style={{ color: "black" }}>
              <strike>
                <strong>{el.strikedOffPrice}$</strong>
              </strike>{" "}
            </Card.Text>
            <Card.Text style={{ color: "red" }}>
              <strong>{el.price}$</strong>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default Productcard;
