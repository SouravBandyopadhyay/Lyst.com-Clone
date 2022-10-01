import { Navigate } from "react-router-dom";

function Homepageads() {
  return (
    <div style={{ border:"1px solid black",marginTop:"1rem",marginBottom:"1rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr  1fr",backgroundColor:"#F5EFE6" }}>
      {/* 1 */}
      <div style={{ padding: "0.5rem" }}>
        <p style={{ fontSize: "6rem" }}>1</p>
        <div style={{ textAlign: "left" }}>
          <p>THE BIGGEST SELECTION</p>
          <p>Shop over 12,000 brands and stores in one place</p>
          <p>
            Find exactly what you want with powerful search and personal
            recommendations
          </p>
        </div>
      </div>
      <div style={{ padding: "0.5rem" }}>
        <p style={{ fontSize: "6rem" }}>2</p>
        <div style={{ textAlign: "left" }}>
          <p>THE HOTTEST PRODUCTS</p>
          <p>See what’s new and what’s trending.</p>
          <p>
            Hit the heart to receive alerts on the latest drops from your
            favourite brands.
          </p>
        </div>
      </div>
      <div style={{ padding: "0.5rem" }}>
        <p style={{ fontSize: "6rem" }}>3</p>
        <div style={{ textAlign: "left" }}>
          <p>THE BEST PRICES</p>
          <p>Compare prices and shipping options across thousands of stores.</p>
          <p>Lyst members are notified when an item goes on sale.</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#9CFF2E" }}>
        <div
          style={{
            justifyContent: "left",
            textAlign: "left",
            margin: "auto",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>SIGN UP</p>
          <p style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>FOR</p>
          <p style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>
            SMARTER SHOPPING
          </p>
          <div
            style={{
              margin: "auto",
              justifyContent: "center",
              marginLeft: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "black",
                padding: "0.5rem 1rem",
                color: "white",
              }}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepageads;
