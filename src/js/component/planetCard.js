import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  const planetStore = store.planet.filter(
    (plt) => plt.name == props.planet.name
  );
  useEffect(() => actions.planetDescription(props.planet.url), []);

  return (
    <Col>
      <Card className="m-2">
        <Card.Img
          className="p-3"          variant="top"
          src="https://neural.love/cdn/ai-photostock/1ee6e2b9-bdca-6c38-8f86-81e7b11c3aab/0.jpg?Expires=1704067199&Signature=Fg7-0~0R-MpCjyNytb1CMtfQPapuyM51UAsaaM7jx3Uyny4EENjbkiz0qf8bktEv~9VRGerC2Xox7xZG7yitQ1D4JiBh6yDE98Bwqjg1ANv7UpnZy3v7emh8kENHfjIyRl4gAIQ5peJrjBKwjM2d6~HP0o8OY3K5~29S3Xf~kckW3tGEtd4HVlGt8TCXxyxyzxU4V1HwhLNMySHtP1eBUxNdYs2IVLU1lQc-4Gh-wbZ2bF9H-D~0F1H5DscCuT0h34hUAB2B~rBdmaiWPH2xBNUtzUKdEsH1VZfJdUoOvPAGzgrbBrgbHXTgSkuvs8Ly84XkGxQGz-IMAnWZHwxADg__&Key-Pair-Id=K2RFTOXRBNSROX"
        />
        <Card.Body>
          <Card.Title>{props.planet.name}</Card.Title>
          {planetStore[0] ? (
            <Card.Text>
              <p>Population: {planetStore[0].population}</p>
              <p>Terrain: {planetStore[0].terrain}</p>
            </Card.Text>
          ) : (
            ""
          )}
          <Link to={"/single_planet/" + props.planet.uid} data={planetStore}>
            <Button variant="outline-primary">Learn More</Button>
          </Link>
          <Button
            variant="outline-warning"
            className="likeBtn"
            onClick={() => actions.addItem(props.planet.name)}
          >
            &#9825;
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

PlanetCard.propTypes = {
  index: PropTypes.number,
  planet: PropTypes.object,
  id: PropTypes.number,
};

export default PlanetCard;