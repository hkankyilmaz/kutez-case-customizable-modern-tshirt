import React from "react";

function Tab(props) {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="title"> {props.text} </h3>
              <div class="section-nav">
                <ul class="section-tab-nav tab-nav">
                  <li class="active">
                    <a data-toggle="tab" href="!#tab2">
                      Organik T-Shirt
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="!#tab2">
                      V Yaka T-Shirt
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="!#tab2">
                      Unisex T-Shirt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Tab;
