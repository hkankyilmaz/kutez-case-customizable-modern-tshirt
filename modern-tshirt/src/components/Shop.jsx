import React from "react";
import PhotoOne from "../images/w1/w1_1.jpg";
import PhotoTwo from "../images/m1/m1_5.jpg";
import PhotoThree from "../images/m1/m1_4.jpg";

function Shop() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="shop">
                <div className="shop-img">
                  <img src={PhotoOne} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Sezon Sonu
                    <br />
                    Ürünler
                  </h3>
                  <a href="!#" className="cta-btn">
                    Alışverişe Başla{" "}
                    <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="shop">
                <div className="shop-img">
                  <img src={PhotoThree} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Organic
                    <br />
                    Ürünler
                  </h3>
                  <a href="!#" className="cta-btn">
                    Alışverişe Başla<i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="shop">
                <div className="shop-img">
                  <img src={PhotoTwo} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    İndirimdeki
                    <br />
                    Ürünler
                  </h3>
                  <a href="!#" className="cta-btn">
                    Alışverişe Başla{" "}
                    <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
