import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const SinglePlanet = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let url = `https://www.swapi.tech/api/planets/${params.uid}`;

  const planetStore = store.planet.filter((planet) => planet.url == url);
  useEffect(() => actions.planetDescription(url), []);

  return (
    <Container>
      <div className="jumbo">
        <div className="d-flex justify-content-between">
          <img
            src="https://neural.love/cdn/ai-photostock/1ee6e2b9-bdca-6c38-8f86-81e7b11c3aab/0.jpg?Expires=1704067199&Signature=Fg7-0~0R-MpCjyNytb1CMtfQPapuyM51UAsaaM7jx3Uyny4EENjbkiz0qf8bktEv~9VRGerC2Xox7xZG7yitQ1D4JiBh6yDE98Bwqjg1ANv7UpnZy3v7emh8kENHfjIyRl4gAIQ5peJrjBKwjM2d6~HP0o8OY3K5~29S3Xf~kckW3tGEtd4HVlGt8TCXxyxyzxU4V1HwhLNMySHtP1eBUxNdYs2IVLU1lQc-4Gh-wbZ2bF9H-D~0F1H5DscCuT0h34hUAB2B~rBdmaiWPH2xBNUtzUKdEsH1VZfJdUoOvPAGzgrbBrgbHXTgSkuvs8Ly84XkGxQGz-IMAnWZHwxADg__&Key-Pair-Id=K2RFTOXRBNSROX"
            width="400"
          />
          <div className="text">
            {planetStore[0] ? (
              <h1 className="display-4">{planetStore[0].name}</h1>
            ) : (
              ""
            )}
            <p>
              Here we should have a description of each StarWars element, but
              this api doesn&apos;t provide one, at least not personalized.
            </p>
          </div>
        </div>
        <hr className="my-4 hr" />
        {planetStore[0] ? (
          <Container>
            <Row className="info">
              <Col sm={2}>Name: {planetStore[0].name}</Col>
              <Col sm={2}>Population: {planetStore[0].population}</Col>
              <Col sm={2}>Climate: {planetStore[0].climate}</Col>
              <Col sm={2}>Terrain: {planetStore[0].terrain}</Col>
              <Col sm={2}>Diameter: {planetStore[0].diameter}</Col>
              <Col sm={2}>Rotation Period: {planetStore[0].rotation_period}</Col>
            </Row>
          </Container>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};