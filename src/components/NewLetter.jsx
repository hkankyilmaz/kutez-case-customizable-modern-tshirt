import React from "react";

function NewLetter() {
  return (
    <div>
      <div id="newsletter" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter">
                <p>
                  <strong>Bülten</strong> İçin Kayıt Olun
                </p>
                <form>
                  <input
                    className="input"
                    type="email"
                    placeholder="e-mailinizi Yazın"
                  />
                  <button className="newsletter-btn">
                    <i className="fa fa-envelope"></i> Abone Ol
                  </button>
                </form>
                <ul className="newsletter-follow">
                  <li>
                    <a href="!#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLetter;
