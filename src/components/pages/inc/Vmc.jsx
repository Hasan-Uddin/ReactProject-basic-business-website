import React from "react";
import { Link } from "react-router-dom";
function Vmc() {
  return (
    <>
      <section className="section bg-custom-light border-top p-2 pb-4">
        <div className="container text-center">
          <div className="row">
            <div className="flex-column text-center">
              <h3 className="main-heading">Our Vision, Mission and Values</h3>
              <div className="underline  mx-auto "></div>
            </div>

            <div className=" zoom-hover card col-md shadow ps-3 pe-3 m-2 ">
              <div className=" card-body">
                <h6 className=" card-title">Our Vision</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className=" zoom-hover card col-md shadow ps-3 pe-3 m-2 ">
              <div className=" card-body">
                <h6 className=" card-title">Our Mission</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className=" zoom-hover card col-md  shadow ps-3 pe-3 m-2 ">
              <div className=" card-body">
                <h6 className=" card-title">Our Core Values</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vmc;
