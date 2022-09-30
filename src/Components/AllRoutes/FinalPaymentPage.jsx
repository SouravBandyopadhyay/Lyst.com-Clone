import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function FinalPaymentPage() {
  return (
    <div>
      <h2>Thank You for shopping with us. Hope to see You soon</h2>
      <img
        src="https://static.lystit.com/static/n/pr_campaigns/year_in_fashion_2020/images/logo.a9c5dfdd1a8b.png"
        alt=""
        srcset=""
      />
      <Button variant="dark">
        <Link to="/">Go to Home Page</Link>
      </Button>
    </div>
  );
}
export default FinalPaymentPage;
