import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import slugify from "slugify";

function MagiaList(props) {

    const { nameFilter, levelsFilter, circulosFilter, listaMagia} = props;
    const magias = listaMagia.filter(magia => {
        if (nameFilter.length && !magia.nome.toLowerCase().includes(nameFilter.toLowerCase())) {
            return false;
        }
        if (levelsFilter.length && !levelsFilter.some(x => magia.niveis.some(y => y.nivel === Number.parseInt(x)))) {
            return false;
        }
        if (circulosFilter.length && !circulosFilter.some(x => magia.niveis.some(y => y.circulo.toLowerCase() === x.toLowerCase()))) {
            return false;
        }
        return true;
    });
    return (
        <ListGroup>
            {magias.map(magia => (
                <ListGroupItem key={magia.id}><Link to={`${magia.id}/${slugify(magia.nome, {replacement: '-'})}`}>{magia.nome}</Link></ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default MagiaList;