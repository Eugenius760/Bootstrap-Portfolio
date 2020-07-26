import React from "react";

function Contact() {
  return (
    <div>
      <div className="container contact">
        <article className="single post">
          <div className="row">
            <div className="col-md-4">
              <h2>Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <label for="usr">Name:</label>
              <input type="text" className="form-control" id="nbar" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <label for="pwd">Email:</label>
              <input type="password" className="form-control" id="ebar" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <label for="comment">Message:</label>
              <textarea className="form-control" rows="5" id="comment"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <button type="button" className="btn btn-lg">
                Submit
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Contact;
