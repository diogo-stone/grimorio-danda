import React from "react";
import { Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";

function Filtro(props) {
  const { nameFilter, levelsFilter, circulosFilter } = props;
  const circulosData = [
    "Abjuração",
    "Adivinhação",
    "Encantamento",
    "Evocação",
    "Etérea",
    "Solar",
    "Lunar",
    "Transmutação",
    "Tempo&Espaço"
  ];

  return (
    <Card>
      <CardBody>
        <Form>
          <FormGroup>
            <Label for="nameFilter">Nome</Label>
            <Input name="nameFilter" value={nameFilter} id="nameFilter" onChange={(e) => props.handleChange(e)}/>
          </FormGroup>
          <FormGroup>
            <Label for="levelsFilter">Nível</Label>
            <Input
              value={levelsFilter}
              type="select"
              name="levelsFilter"
              id="levelsFilter"
              multiple
              onChange={(e) => props.handleChange(e)}
            >
              {Array.from(Array(6).keys()).map(n => (
                <option value={n} key={n}>
                  {n}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="circulosFilter">Círculo</Label>
            <Input
              value={circulosFilter}
              type="select"
              name="circulosFilter"
              id="circulosFilter"
              multiple
              onChange={(e) => props.handleChange(e)}
            >
              {circulosData.map((circulo, index) => (
                <option value={circulo} key={index}>{circulo}</option>
              ))}
            </Input>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default Filtro;
