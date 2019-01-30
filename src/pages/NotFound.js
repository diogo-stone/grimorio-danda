import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row md="12">
          <div class="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div class="error-actions">
              <a
                href="#"
                class="btn btn-primary btn-lg"
              >
                <span class="glyphicon glyphicon-home" />
                Take Me Home{" "}
              </a>
              <a
                href="#"
                class="btn btn-default btn-lg"
              >
                <span class="glyphicon glyphicon-envelope" /> Contact Support{" "}
              </a>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
