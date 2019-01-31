import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found!</h2>
              <div className="error-details">
                Mals, a página não foi encontrada...
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  Take Me Home <small style={{textDecoration: 'line-through'}}>Country roads</small>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
