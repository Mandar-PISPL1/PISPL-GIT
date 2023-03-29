import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import "../Styles/main.css";
import '../App.css';

import { AiFillCaretDown } from "react-icons/ai";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div style={{ backgroundColor: "var(--mainColor)" }} > <img src="https://parikhinfosolutions.com/wp-content/uploads/2023/01/logo-desktop.webp" alt="Logo" width="40" height="45" className="d-inline-block align-text-top" />
				<div style={{ backgroundColor: "var(--mainColor)", color: "white", display: "flex", flexDirection: "column" }} >
					<div>Parikh info Solution Pvt. Ltd. </div>
					<div style={{ fontSize: "0.8rem" }}>Localization & Globalization Experts</div>
				</div>
			</div>
			<nav ref={navRef}>
				<div className="dropdown">
					<button className="dropbtn">Services</button>
					<div className="dropdown-content">
						<a href="#">Translation</a>
						<a href="#">Transcription</a>
						<a href="#">Localization</a>
						<a href="#">Dubbing</a>
						<a href="#">Subtitling</a>
						<a href="#">Voice Over</a>
						<a href="#">Interpretation (VRI)</a>
						<a href="#">Content Writing</a>
						<a href="#">Video Creation</a>
						<a href="#">AI Dubbing</a>
					</div>
				</div>
				<a href="/#">About Us</a>
				<a href="/#">Clients</a>
				<a href="/#">Blogs</a>
				<a href="/#">Join Now</a>
				<a href="/#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
