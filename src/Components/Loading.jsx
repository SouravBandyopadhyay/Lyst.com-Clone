import "./Styles/Loading.css";
import { Spinner } from "react-bootstrap";
function Loading() {
  return (
    <div className="loading-component">
      <img
        src="https://static.lystit.com/static/n/pr_campaigns/year_in_fashion_2020/images/logo.a9c5dfdd1a8b.png"
        alt=""
        srcset=""
      />
      <p>taking you to ....</p>
      <p>
        <strong>products page</strong>
      </p>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
export default Loading;
