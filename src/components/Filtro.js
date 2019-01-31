import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

function Filtro(props) {
  const { nameFilter, levelsFilter, circulosFilter, favoritesOnly } = props;
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
        <CardTitle>
          <h2>Filtro</h2>
        </CardTitle>
        <Form>
          <FormGroup>
            <Label for="nameFilter">Nome</Label>
            <Input
              name="nameFilter"
              value={nameFilter}
              id="nameFilter"
              onChange={e => props.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="levelsFilter">
              Nível{" "}
              <small className="text-muted">
                Use CTRL para selecionar mais de uma opção
              </small>
            </Label>
            <Input
              value={levelsFilter}
              type="select"
              name="levelsFilter"
              id="levelsFilter"
              multiple
              onChange={e => props.handleChange(e)}
            >
              {Array.from(Array(6).keys()).map(n => (
                <option value={n} key={n}>
                  {n}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="circulosFilter">
              Círculo{" "}
              <small className="text-muted">
                Use CTRL para selecionar mais de uma opção
              </small>
            </Label>
            <Input
              value={circulosFilter}
              type="select"
              name="circulosFilter"
              id="circulosFilter"
              multiple
              onChange={e => props.handleChange(e)}
            >
              {circulosData.map((circulo, index) => (
                <option value={circulo} key={index}>
                  {circulo}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="favoritesOnly"
                id="favoritesOnly"
                value={favoritesOnly}
                onChange={e => props.handleChange(e)}
              />{" "}
              Somente Favoritos
            </Label>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default Filtro;
