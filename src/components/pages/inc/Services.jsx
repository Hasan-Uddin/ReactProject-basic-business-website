import React from "react";
const img =
  "data:image/jpeg;base64,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";

function Services() {
  return (
    <section className="section bg-light border-top">
      <div className="container text-center">
        <div className="row">
          <div className="flex-column text-center">
            <h3 className="main-heading">Our Services</h3>
            <div className="underline  mx-auto"></div>
          </div>

          <div className=" zoom-hover card col-md shadow m-2 p-0 border-1 border-info">
            <img src={img} alt="AAS" className=" card-img-top" />
            <div className=" card-body">
              <h6 className=" card-title">Our Services#</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className=" zoom-hover card col-md shadow m-2 p-0 border-1 border-info">
            <img src={img} alt="AAS" className=" card-img-top" />
            <div className=" card-body">
              <h6 className=" card-title">Our Services#</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className=" zoom-hover card col-md shadow m-2 p-0 border-1 border-info">
            <img src={img} alt="AAS" className=" card-img-top" />
            <div className=" card-body">
              <h6 className=" card-title">Our Services#</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className=" zoom-hover card col-md shadow m-2 p-0 border-1 border-info">
            <img src={img} alt="AAS" className=" card-img-top" />
            <div className=" card-body">
              <h6 className=" card-title">Our Services#</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
