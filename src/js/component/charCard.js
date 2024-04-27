import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const CharCard = props => {
	const { store, actions } = useContext(Context);
	const charStore = store.character.filter((char) => char.name == props.character.name);
	useEffect(() => actions.charDescription(props.character.url), []);

	return (
		<Col>
			<Card className="m-2">
				<Card.Img className="p-3"
					variant="top"
					src="https://neural.love/cdn/ai-photostock/1ed7c2cf-ab8d-6e80-81de-1f46ae6bfe38/2.jpg?Expires=1704067199&Signature=KIMInj9LViTlOe4Ys1uN-FJPpVAaBBzByjJExdHtMgzTLtO~WTXGrryFKv88meGKTI-w8q03iFZh1wxUG2X3IUmUR7GiNqUyr0s6uigFOe4DHX4S~KB7~mwwgKkCnj2pHqus-HxxlWaBd1V5~Kgi7gpRnaQnEzubgqlg8kBEbOccDUXXCuLAt4L9Ti4O8RPTQoZWTQWUInmuq8FXiKK32aBi7apcAEfPGLZTbKcMGdvT~ax7Nk54Nbn-AwRNq016K4wRaoxTL8Pdl~8yegKAvsgbB2JouBm2-ctG6bQZ6GJWQeXdSj0n6LxMMB5gq4TUEgJSCQI34cCa3FvWEhKhhg__&Key-Pair-Id=K2RFTOXRBNSROX"
					
				/>
				<Card.Body>
					<Card.Title>{props.character.name}</Card.Title>
					{charStore[0] ? (
						<Card.Text>
							<p>Gender: {charStore[0].gender}</p>
							<p>Hair Color: {charStore[0].hair_color}</p>
							<p>Eye Color: {charStore[0].eye_color}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/single_char/" + props.character.uid} data={charStore}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.character.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

CharCard.propTypes = {
	index: PropTypes.number,
	character: PropTypes.object,
	id: PropTypes.number
};

export default CharCard;