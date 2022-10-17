import React from "react";
import w1 from "../images/w1/w1_2.jpg";
import m1 from "../images/m1/m1_2.jpg";

function Header() {
  return (
    <>
      <header>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="!#" className="logo">
                    <h2
                      style={{
                        color: "white",
                        transform: "translateY(50%)",
                        marginBottom: "30px",
                      }}
                    >
                      {" "}
                      <span style={{ color: "red" }}>M</span> T-SHIRT{" "}
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "15px",
                          height: "15px",
                          backgroundColor: "red",
                          display: "inline-block",
                        }}
                      ></div>
                    </h2>
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="header-search">
                  <form>
                    <select className="input-select">
                      <option value="0">Kategoriler</option>
                      <option value="1">Kategori 01</option>
                      <option value="1">Kategori 02</option>
                    </select>
                    <input className="input" placeholder="Arama yapınız..." />
                    <button className="search-btn">Arama</button>
                  </form>
                </div>
              </div>

              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  <div>
                    <a href="!#">
                      <i className="fa fa-heart-o"></i>
                      <span>Beğendiklerim</span>
                      <div className="qty">2</div>
                    </a>
                  </div>

                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fa fa-shopping-cart"></i>
                      <span>Sepet</span>
                      <div className="qty">3</div>
                    </a>
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        <div className="product-widget">
                          <div className="product-img">
                            <img src={m1} alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="!#">Basic V Yaka Tshirt</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">1x</span>₺980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>

                        <div className="product-widget">
                          <div className="product-img">
                            <img src={w1} alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="!#">Basic Tshirt</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">3x</span>₺980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>2 ürün(s) eklendi</small>
                        <h5>TOPLAM: 2,940.00 TL</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="!#">Sepeti Göster</a>
                        <a href="!#">
                          Ödeme <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="menu-toggle">
                    <a href="!#">
                      <i className="fa fa-bars"></i>
                      <span>Menü</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <ul className="main-nav nav navbar-nav">
              <li className="active">
                <a href="!#">AnaSayfa</a>
              </li>
              <li>
                <a href="!#">Erkek</a>
              </li>
              <li>
                <a href="!#">Kadın</a>
              </li>
              <li>
                <a href="!#">Unisex</a>
              </li>
              <li>
                <a href="!#">Outlet</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
