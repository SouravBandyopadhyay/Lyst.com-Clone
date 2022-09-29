import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/Women.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Loading from "../Loading";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
function Women() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () =>
    axios.get(`https://fakestoreapi.com/products`).then((getData) => {
      console.log(getData.data);
      setData(getData.data);
    });
  useEffect(() => {
    setTimeout(function () {
      getData();
      setLoading(false);
    }, 3000);
    setLoading(true);
  }, []);

  return (
    <div>
      <div className="women-clothing-heading">
        <div>
          <h2>CLOTHING FOR WOMEN</h2>
        </div>
      </div>
      <div className="product-parent-div">
        <div className="products-display-filtering">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Gender</Accordion.Header>
              <Accordion.Body
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Form.Check type="checkbox" label="Male" />
                <Form.Check type="checkbox" label="Female" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Sort By </Accordion.Header>
              <Accordion.Body
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Form.Check type="checkbox" label="Ascending" />
                <Form.Check type="checkbox" label="Descending" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="products-display-below">
          {loading ? (
            <Loading />
          ) : (
            <div className="womens-data-card">
              {data &&
                data.map((el) => (
                  <Card>
                    <Card.Img
                      variant="top"
                      src={el.image}
                      style={{ width: "100%",height:"auto" }}
                    />
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
                        <Card.Text style={{ color: "black" }}>Count:
                            <strong>{el.rating.count}</strong>
                        </Card.Text>
                        <Card.Text style={{ color: "red" }}>
                          <strong>{el.price}$</strong>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Women;
