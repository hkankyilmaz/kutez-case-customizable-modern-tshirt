import React from "react";
import w1 from "../images/w1/w1_2.jpg";
import m1 from "../images/m1/m1_2.jpg";

function Header() {
  return (
    <>
      <header>
        <div id="header">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="header-logo">
                  <a href="!#" class="logo">
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

              <div class="col-md-6">
                <div class="header-search">
                  <form>
                    <select class="input-select">
                      <option value="0">All Categories</option>
                      <option value="1">Category 01</option>
                      <option value="1">Category 02</option>
                    </select>
                    <input class="input" placeholder="Search here" />
                    <button class="search-btn">Search</button>
                  </form>
                </div>
              </div>

              <div class="col-md-3 clearfix">
                <div class="header-ctn">
                  <div>
                    <a href="!#">
                      <i class="fa fa-heart-o"></i>
                      <span>Your Wishlist</span>
                      <div class="qty">2</div>
                    </a>
                  </div>

                  <div class="dropdown">
                    <a
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i class="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                      <div class="qty">3</div>
                    </a>
                    <div class="cart-dropdown">
                      <div class="cart-list">
                        <div class="product-widget">
                          <div class="product-img">
                            <img src={m1} alt="" />
                          </div>
                          <div class="product-body">
                            <h3 class="product-name">
                              <a href="!#">product name goes here</a>
                            </h3>
                            <h4 class="product-price">
                              <span class="qty">1x</span>$980.00
                            </h4>
                          </div>
                          <button class="delete">
                            <i class="fa fa-close"></i>
                          </button>
                        </div>

                        <div class="product-widget">
                          <div class="product-img">
                            <img src={w1} alt="" />
                          </div>
                          <div class="product-body">
                            <h3 class="product-name">
                              <a href="!#">product name goes here</a>
                            </h3>
                            <h4 class="product-price">
                              <span class="qty">3x</span>$980.00
                            </h4>
                          </div>
                          <button class="delete">
                            <i class="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                      <div class="cart-summary">
                        <small>2 Item(s) selected</small>
                        <h5>SUBTOTAL: 2,940.00 TL</h5>
                      </div>
                      <div class="cart-btns">
                        <a href="!#">View Cart</a>
                        <a href="!#">
                          Checkout <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="menu-toggle">
                    <a href="!#">
                      <i class="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav id="navigation">
        <div class="container">
          <div id="responsive-nav">
            <ul class="main-nav nav navbar-nav">
              <li class="active">
                <a href="!#">Home</a>
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
