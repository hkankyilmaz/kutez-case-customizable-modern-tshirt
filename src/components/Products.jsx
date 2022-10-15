import React from "react";
import Product from "./Product";

function Products({ data }) {
  return (
    <div className="section">
      <div className="container">
        <div
          className="row trb-row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Product data={data[0]} />
          <Product data={data[1]} />
          <Product data={data[2]} />
        </div>
      </div>
    </div>
  );
}

export default Products;
