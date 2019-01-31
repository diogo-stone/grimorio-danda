import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as FullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as EmptyStar } from "@fortawesome/free-regular-svg-icons";

class MagiaList extends Component {
  toggleFav(isFav, magiaId) {
    if (isFav) {
      (magiaId => this.props.removeFav(magiaId))(magiaId);
    } else {
      (magiaId => this.props.addToFav(magiaId))(magiaId);
    }
  }

  renderMagia(magia) {
    const { favorites } = this.props;
    let isFav = favorites.includes(magia.id);
    return (
      <ListGroupItem key={magia.id}>
        <dl className="row" style={{ marginBottom: 0 }}>
          <dt className="col-sm-6">
            <FontAwesomeIcon
              className={isFav ? "text-warning" : ""}
              icon={isFav ? FullStar : EmptyStar}
              size="lg"
              onClick={() => this.toggleFav(isFav, magia.id)}
            />
            <Link
              to={`${magia.id}/${slugify(magia.nome, { replacement: "-" })}`}
            >
              {magia.nome}
            </Link>
          </dt>
          <dd className="col-sm-6">
            {magia.niveis.map((nivel, index) => (
              <p key={index}>
                {nivel.circulo} {nivel.nivel}{" "}
                {magia.descritores[index] &&
                  `(${magia.descritores[index].descritor})`}
              </p>
            ))}
          </dd>
        </dl>
      </ListGroupItem>
    );
  }
  render() {
    const {
      nameFilter,
      levelsFilter,
      circulosFilter,
      listaMagia,
      favoritesOnly,
      favorites
    } = this.props;
    const magias = listaMagia
      .sort((a, b) => a.niveis[0].nivel - b.niveis[0].nivel)
      .filter(magia => {
        if (
          nameFilter.length &&
          !magia.nome.toLowerCase().includes(nameFilter.toLowerCase())
        ) {
          return false;
        } else if (
          levelsFilter.length &&
          !levelsFilter.some(x =>
            magia.niveis.some(y => y.nivel === Number.parseInt(x))
          )
        ) {
          return false;
        } else if (
          circulosFilter.length &&
          !circulosFilter.some(x =>
            magia.niveis.some(y => y.circulo.toLowerCase() === x.toLowerCase())
          )
        ) {
          return false;
        } else if (favoritesOnly === true && !favorites.includes(magia.id)) {
          return false;
        } else {
          return true;
        }
      });

    return (
      <ListGroup>{magias.map(magia => this.renderMagia(magia))}</ListGroup>
    );
  }
}

export default MagiaList;
