import React from "react";
import { useLocation as urlPath } from "react-router-dom";

const Properties = {
  heading: "",
};
export default function SubNavBar({ heading = "Home" } = Properties) {
  return (
    <div>
      <div className="py-3 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-4 my-auto">
              <h6 className="float-start">{heading}</h6>
            </div>
            <div className="col-8 my-auto">
              <h6 className=" float-end">{"Home " + urlPath().pathname}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
