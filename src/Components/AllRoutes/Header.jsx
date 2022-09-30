import { RiShoppingCartLine } from "@react-icons/all-files/ri/RiShoppingCartLine";
function Header(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "20%",
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        padding: "1rem",
        gap: "1rem",
      }}
      className="flex shopping-card"
    >
      <div onClick={() => props.handleShow(false)}>Check More</div>
      <div onClick={() => props.handleShow(true)}>
        {" "}
        <RiShoppingCartLine />{" "}
        <sup
          style={{
            color: "red",
            fontWeight: "600",
            backgroundColor: "yellow",
            borderRadius: "50%",
            fontSize:"0.9rem"
          }}
        >
          {props.count}
        </sup>
      </div>
    </div>
  );
}

export default Header;
