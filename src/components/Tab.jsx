import React from "react";

function Tab(props) {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title"> {props.text} </h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className="active">
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
