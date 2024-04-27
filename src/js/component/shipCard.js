import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ShipCard = props => {
	const { store, actions } = useContext(Context);
	const shipStore = store.starShip.filter(ship => ship.name == props.ship.name);
	useEffect(() => actions.starShipDescription(props.ship.url), []);

	return (
		<Col>
			<Card className="m-2">
				<Card.Img
					className="p-3"
					variant="top"
					src="https://neural.love/cdn/ai-photostock/1ee7cacc-c46c-6fcc-8932-578c541625a4/0.jpg?Expires=1704067199&Signature=Wwgp32SIBFulzs6Bz9is4wGvSGphRaQzC-zpkvrYsQ5JzERy6bJb19mIsEnGDSGYLqg~yCAJjweERN826FvuRH~jZa6MgFRio607NhYeOpM6sVopZGY-RNJOAGIh12AyWZf5Yvkl2qPiDhERi54iS4x6DH8FTMnf4Qj9Adyq5e6QIxsk79bWYaXf4GM0IYqZ0~fSOUYPZ141sjIDdYUMZXgsgErkznBU~uhzSHM8YWinHsolyKTswFgj2UrQHYquiV82Z43iHzUGRguRPTpYMz4ZxdnUB6G0atHhCz6uSCTTVFll7jEZ8oyhZHAgJmJkmyG~1fOXB042VWcuD6TtuQ__&Key-Pair-Id=K2RFTOXRBNSROX"
				/>
				<Card.Body>
					<Card.Title>{props.ship.name}</Card.Title>
					{shipStore[0] ? (
						<Card.Text>
							<p>Model: {shipStore[0].model}</p>
							<p>Class: {shipStore[0].starship_class}</p>
							<p>Passengers: {shipStore[0].passengers}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/single_starship/" + props.ship.uid} data={shipStore}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.ship.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

ShipCard.propTypes = {
	index: PropTypes.number,
	ship: PropTypes.object,
	id: PropTypes.number
};

export default ShipCard;