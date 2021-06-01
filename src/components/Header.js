import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";

function Header() {
	const [navigationStatus, setNavigationStatus] = useState(false);
	const cars = useSelector(selectCars);
	return (
		<Container>
			<a href="/">
				<img src="./Images/Logo.svg" alt="Tesla Logo" />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<a key={index} href="/">
							{car}
						</a>
					))}
				<a href="/">Solar Roof</a>
				<a href="/">Solar Panels</a>
			</Menu>
			<RightMenu>
				<a href="/">Shop</a>
				<a href="/">Tesla Account</a>
				<CustomMenu onClick={() => setNavigationStatus(true)} />
			</RightMenu>
			<HamburgerNavigation show={navigationStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setNavigationStatus(false)} />
				</CloseWrapper>
				{cars &&
					cars.map((car, index) => (
						<li key={index}>
							<a href="/">{car}</a>
						</li>
					))}
				<li>
					<a href="/">Existing Inventory</a>
				</li>
				<li>
					<a href="/">Used Inventory</a>
				</li>
				<li>
					<a href="/">Trade-In</a>
				</li>
				<li>
					<a href="/">CyberTruck</a>
				</li>
				<li>
					<a href="/">Roadster</a>
				</li>
				<li>
					<a href="/">Semi</a>
				</li>
				<li>
					<a href="/">Charging</a>
				</li>
				<li>
					<a href="/">Powerwall</a>
				</li>
				<li>
					<a href="/">Commercial Energy</a>
				</li>
				<li>
					<a href="/">Utilities</a>
				</li>
			</HamburgerNavigation>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 60px;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const HamburgerNavigation = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	list-style: none;
	background: white;
	width: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	z-index: 16;
	transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
	transition: transform 0.2s;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		a {
			font-weight: 600;
		}
	}
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
