import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import {
  Container,
  Row,
  CardTitle,
  Card,
  CardText,
  CardBody,
  Col
} from "reactstrap";

class MagiaInfo extends Component {
    state = {
        magia: null
    }
    componentWillMount() {
        const {history, listaMagia, match: {params: { magicId }}} = this.props;
        const magia = listaMagia.find(x => x.id === Number.parseInt(magicId));
        console.log(magia);
        if (!magia) {
            history.push('/404');
        }
        this.setState({magia});
    }

    render() {
      const {magia} = this.state;
      if (!magia) return(<div></div>);
        return (
        <Card>
            <CardBody>
            <CardTitle>
                <h3>{magia.nome}</h3>
            </CardTitle>
                <Container>
                    <dl className="row">
                        <dt className="col-sm-3">Tempo de execução</dt><dd className="col-sm-9">{magia.tempoExecucao}</dd>
                        <dt className="col-sm-3">Alcance</dt><dd className="col-sm-9">{magia.alcance}</dd>
                        <dt className="col-sm-3">Alvo</dt><dd className="col-sm-9">{magia.alvo}</dd>
                        <dt className="col-sm-3">Area</dt><dd className="col-sm-9">{magia.area}</dd>
                        <dt className="col-sm-3">Efeito</dt><dd className="col-sm-9">{magia.efeito}</dd>
                        <dt className="col-sm-3">Duração</dt><dd className="col-sm-9">{magia.duracao}</dd>
                        <dt className="col-sm-3">Teste de Resistência</dt><dd className="col-sm-9">{magia.testeResistencia}</dd>
                        <dt className="col-sm-3">Componente material</dt><dd className="col-sm-9">{magia.componenteMaterial}</dd>
                        <dt className="col-sm-3">Custo de XP</dt><dd className="col-sm-9">{magia.custoXP}</dd>
                    </dl>
                    <Row>
                        <h4>Descrição</h4>
                        <p dangerouslySetInnerHTML={{__html: magia.descricao}}></p>
                    </Row>
                </Container>
            </CardBody>
        </Card>
        );
    }
}

export default withRouter(MagiaInfo);
