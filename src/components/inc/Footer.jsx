import React from "react";
import { Link, useLocation as urlPath } from "react-router-dom";

function Footer() {
  return (
    <section className="c-mt-auto section footer bg-dark text-light m-0  ps-3 pe-3">
      <div className="row">
        <div className=" col-md-auto">
          <h4>Address</h4>
          <ul className="list-unstyled">
            <li>HeadQuater: 134, ps-12, state, country</li>
            <li>BranchState: 14, ps-18, state, country</li>
            <li>BranchState: 23, ps-11, state, country</li>
          </ul>
        </div>
        <div className=" col-md-auto">
          <h4>Contact</h4>
          <ul className="list-unstyled">
            <li>Email: example@mail.com</li>
            <li>Fax: XXXXX</li>
            <li>Phone: 017xxxxxxx</li>
          </ul>
        </div>
        <div className=" col-md-auto">
          <h4>Developer</h4>
          <ul className="list-unstyled">
            <li>Hasan Uddin</li>
            <li>Email: abcnizamd@gmail.com</li>
          </ul>
        </div>

        <div className=" text-light ps-4  fa-copyright">
          <hr />
          <ul className=" list-inline">
            <li className="nav-item">
              <Link to={"/About"} className=" nav-link zoom-hover">
                About
              </Link>
              <Link to={"/Contact"} className=" nav-link zoom-hover">
                Contact
              </Link>
              <Link to={"/Terms"} className=" nav-link zoom-hover">
                Terms & condition
              </Link>
            </li>
          </ul>
          @copyright 2023
        </div>
      </div>
    </section>
  );
}

export default Footer;
