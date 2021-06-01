import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, backgroundImage, leftButtonText, rightButtonText }) {
	return (
		<Wrap background={backgroundImage}>
			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>
					<p>{description}</p>
				</ItemText>
			</Fade>
			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftButtonText}</LeftButton>
						{rightButtonText && <RightButton>{rightButtonText}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src="./Images/Down-Arrow.svg" />
			</Buttons>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url("/Images/${props.background}")`};
	justify-content: space-between;
	align-items: center;
`;

const ItemText = styled.div`
	text-align: center;
	padding-top: 15vh;
	z-index: -1;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	display: flex;
	height: 40px;
	width: 256px;
	border-radius: 100px;
	background-color: rgba(23, 26, 32, 0.8);
	font-size: 12px;
	color: white;
	opacity: 0.85;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	cursor: pointer;
	margin: 8px;
`;

const RightButton = styled(LeftButton)`
	background: white;
	color: black;
	opacity: 0.65;
`;

const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
	overflow-x: hidden;
`;

const Buttons = styled.div``;
