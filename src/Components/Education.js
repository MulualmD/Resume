import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Slide from "react-reveal";

class Education extends Component {
  render() {
    return (
      <div className="overflow-hidden bg-dark text-light">
        <Row className=" py-5">
          <Col>
            <Slide left>
              <h5 className=" text-center font-weight-bold mx-3 my-3">
                EDUCATION
              </h5>
            </Slide>
          </Col>
          <Col sm="8" className="text-left px-5">
            <Slide right>
              <h4 className="my-3">
                2019 - 2020 Tech Career (Technology Boot-Camp) - A professional
                course of 800+ hours 10 Months Course
              </h4>
              <h5 className="text-muted">
                Full-Stack Developer React \ Nodejs \ JavaScript
              </h5>
            </Slide>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Education;
