import React from "react";

function NewLetter() {
  return (
    <div>
      <div id="newsletter" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="newsletter">
                <p>
                  <strong>Bülten</strong> İçin Kayıt Olun
                </p>
                <form>
                  <input
                    class="input"
                    type="email"
                    placeholder="e-mailinizi Yazın"
                  />
                  <button class="newsletter-btn">
                    <i class="fa fa-envelope"></i> Abone Ol
                  </button>
                </form>
                <ul class="newsletter-follow">
                  <li>
                    <a href="!#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i class="fa fa-pinterest"></i>
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
