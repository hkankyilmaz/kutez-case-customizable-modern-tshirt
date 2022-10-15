import React, { useState, useRef } from "react";
import { GrFormNext, GrFormPrevious, GrPrevious } from "react-icons/gr";
import AlertS from "./Alert";

function Product({ data }) {
  const ref = useRef();
  const [size, setSize] = useState("L");
  const [checkAlert, setCheckAlert] = useState({ size: null, color: null });
  console.log(checkAlert);

  const handleClick = () => {
    ref.current.openAlert();
  };

  React.useEffect(() => {});
  const colors = Object.values(data.color);
  return (
    <div className="col-md-3 col-xs-12">
      <div className="row ">
        <div className="products-tabs d-flex justify-content-center">
          <div className="product">
            <div className="product-img">
              <div id={data.id} class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="4"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="5"
                  ></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img src={data.photos[0]} alt="..." />
                    <div class="carousel-caption"></div>
                  </div>
                  <div class="item">
                    <img src={data.photos[1]} alt="..." />
                    <div class="carousel-caption"></div>
                  </div>
                  <div class="item">
                    <img src={data.photos[2]} alt="..." />
                    <div class="carousel-caption"></div>
                  </div>
                  <div class="item">
                    <img src={data.photos[3]} alt="..." />
                    <div class="carousel-caption"></div>
                  </div>
                  <div class="item">
                    <img src={data.photos[4]} alt="..." />
                    <div class="carousel-caption"></div>
                  </div>
                  <div class="item">
                    <img src={data.photos[5]} alt="..." />
                    <div class="carousel-caption"></div>
                  </div>
                </div>

                <a
                  class="left carousel-control"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
                >
                  <GrFormPrevious className="next-pre-btn" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="right carousel-control"
                  href={`#${data.id}`}
                  role="button"
                  data-slide="next"
                >
                  <GrFormNext className="next-pre-btn" />

                  <span class="sr-only">Next</span>
                </a>
              </div>
              {data.discount && (
                <div className="product-label">
                  <span className="sale"> {data.discount.value} </span>
                  <span className="new">NEW</span>
                </div>
              )}
            </div>
            <div className="product-body">
              <p className="product-category"> {data.gender} </p>
              <h3 className="product-name">
                <a href="!#"> {data.description} </a>
              </h3>
              <h4 className="product-price">₺ {data.price[`${size}`]} </h4>
              <div className="product-rating">
                {colors.map((item) => (
                  <div
                    className="color-circle"
                    style={{
                      backgroundColor: item,
                      border: item == "#fff" && "1px black solid",
                    }}
                  ></div>
                ))}
              </div>
              <div style={{ display: "flex", marginTop: "1em" }}>
                <select
                  onChange={(e) => {
                    setCheckAlert({ ...checkAlert, color: e.target.value });
                  }}
                  className="product-select"
                >
                  <option value="">Renk Seçin..</option>
                  {Object.keys(data.color).map((item) => (
                    <option value={item}> {item} </option>
                  ))}
                </select>
                <select
                  onChange={(e) => {
                    setSize(e.target.value);
                    setCheckAlert({ ...checkAlert, size: e.target.value });
                  }}
                  className="product-select"
                >
                  <option value="">Beden Seçin..</option>
                  {Object.keys(data.sizes).map((item) => (
                    <option value={item}> {item} </option>
                  ))}
                </select>
              </div>
              <div className="product-btns">
                <button className="add-to-wishlist">
                  <i className="fa fa-heart-o"></i>
                  <span className="tooltipp">add to wishlist</span>
                </button>
                <button className="add-to-compare">
                  <i className="fa fa-exchange"></i>
                  <span className="tooltipp">add to compare</span>
                </button>
                <button className="quick-view">
                  <i className="fa fa-eye"></i>
                  <span className="tooltipp">quick view</span>
                </button>
              </div>
            </div>
            <div className="add-to-cart">
              <button onClick={() => handleClick()} className="add-to-cart-btn">
                <i className="fa fa-shopping-cart"></i> add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <AlertS data={checkAlert} ref={ref} />
    </div>
  );
}

export default Product;
