import React, { Component } from "react";
import Filtro from "../components/Filtro";
import { Container, Row, Col } from "reactstrap";
import MagiaList from "../components/MagiaList";

class Index extends Component {
  // Filtros deNome, niveis (círculo/nivel),
  state = {
    nameFilter: "",
    levelsFilter: [],
    circulosFilter: [],
    favoritesOnly: false
  };

  onSearchChange = e => {
    if (e.target.selectedOptions) {
      let options = e.target.options;
      let value = [];
      for (let i = 0; i < options.length; i++) {
        options[i].selected && value.push(options[i].value);
      }
      this.setState({ [e.target.name]: value });
    } else if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    const {
      nameFilter,
      levelsFilter,
      circulosFilter,
      favoritesOnly
    } = this.state;
    const { listaMagia, favorites } = this.props;
    return (
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Filtro
              levelsFilter={levelsFilter}
              circulosFilter={circulosFilter}
              nameFilter={nameFilter}
              handleChange={this.onSearchChange}
              favoritesOnly={favoritesOnly}
            />
          </Col>
          <Col xs="12" md="6">
            <MagiaList
              levelsFilter={levelsFilter}
              circulosFilter={circulosFilter}
              nameFilter={nameFilter}
              favoritesOnly={favoritesOnly}
              listaMagia={listaMagia}
              favorites={favorites}
              addToFav={this.props.addToFav}
              removeFav={this.props.removeFav}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index;
