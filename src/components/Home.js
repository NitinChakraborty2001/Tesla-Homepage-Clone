import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery!"
				backgroundImage="Model-S.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery!"
				backgroundImage="Model-Y.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery!"
				backgroundImage="Model-3.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery!"
				backgroundImage="Model-X.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-Back Guarantee!"
				backgroundImage="Solar-Panel.jpg"
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New Roof Plus Solar Panels!"
				backgroundImage="Solar-Roof.jpg"
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImage="Accessories.jpg"
				leftButtonText="Shop Now"
			/>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	height: 100vh;
	z-index: 10;
`;
