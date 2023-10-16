import { React, Component } from "react";
import SubNavBar from "../inc/subNavBar";

function Contact() {
  return (
    <>
      <SubNavBar heading="Contact Us" />
      <div className="container my-3">
        <div className="card shadow p-2">
          <div className="card-body">
            <div className="col-md-8 ">
              <h3>Contact us</h3> <hr />
              <form
                id="formContactUs"
                className=""
                action="API.php"
                method="post"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Tell us
                  </label>
                  <textarea
                    className=" form-control"
                    name="comments"
                    id="comment"
                    cols=" auto"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                  />
                  <label className="form-check-label" htmlFor="check1">
                    I want to hear more
                  </label>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </form>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
