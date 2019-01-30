import React, { Component } from 'react';
import Filtro from '../components/Filtro';
import { Container, Row, Col } from 'reactstrap';
import MagiaList from '../components/MagiaList';

class Index extends Component {
    // Filtros deNome, niveis (círculo/nivel),
    state = {
        nameFilter: "",
        levelsFilter: [],
        circulosFilter: []
    }

    onSearchChange = e => {
        if (e.target.selectedOptions) {
            let options = e.target.options;
            let value = [];
            for (let i = 0; i < options.length; i++) {
                options[i].selected && value.push(options[i].value);
            }
            this.setState({[e.target.name]: value});
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    render() {
        const { nameFilter, levelsFilter, circulosFilter } = this.state;
        return (
            <Container>
            <Row>
                <Col xs="12" md="6">
                    <Filtro levelsFilter={levelsFilter} circulosFilter={circulosFilter} nameFilter={nameFilter} handleChange={this.onSearchChange}/>
                </Col>
                <Col xs="12" md="6">
                    <MagiaList levelsFilter={levelsFilter} circulosFilter={circulosFilter} nameFilter={nameFilter}/>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default Index;