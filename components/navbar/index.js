import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import logo from "../../images/Light2.png";
import logoDark from "../../images/Dark2.png";
import menu from "../../images/icons/Menu.png";
import MobileMenu from "../mobileMenu/index.js";
import Icon from "../Icon/Icon";

export default function Nav(props) {
	const navigate = useNavigate();
	const [mobileMenu, setMobile] = useState(false);
	const [searchText, setSearchText] = useState("");
	const { pathname } = useLocation();

	return (
		<div>
			{mobileMenu ? (
				<MobileMenu setMobile={setMobile} className={styles.mobileMenu} />
			) : null}
			<div className={styles.container}>
				<div>
					{!props.darkMode ? (
						<Link>
							<img src={logo} alt="Main Logo" className={styles.img} />
						</Link>
					) : (
						<img
							src={logoDark}
							alt="Main Logo"
							className={styles.img}
							onClick={() => {
								navigate("/");
							}}
						/>
					)}
				</div>
				<div className={styles.searchContainer}>
					<div className={styles.formTextInput + " " + styles.searchInput}>
						<Icon name="search" size="24" />
						<input
							onChange={(e) => setSearchText(e.target.value)}
							type="text"
							value={searchText}
							placeholder="Search item here"
						/>
					</div>
				</div>
				<div
					className={`${styles.navLink} ${
						pathname === "/explore" ? styles.navLinkActive : null
					}`}
					onClick={() => {
						navigate("/explore");
					}}
				>
					Explore
				</div>
				<div
					className={`${styles.navLink} ${
						pathname === "/my-items" ? styles.navLinkActive : null
					}`}
					onClick={() => {
						navigate("/my-items");
					}}
				>
					My Items
				</div>
				<div
					className={`${styles.navLink} ${
						pathname === "/following" ? styles.navLinkActive : null
					}`}
					onClick={() => {
						navigate("/following");
					}}
				>
					Following
				</div>
				<div>
					<button
						className={styles.button}
						onClick={() => {
							navigate("/create");
						}}
					>
						Create
					</button>
				</div>
				<div>
					<button
						className={styles.buttonOutline}
						onClick={() => {
							navigate("/connect");
						}}
					>
						Connect
					</button>
				</div>
				<div>
					<img
						src={menu}
						onClick={() => {
							setMobile(true);
						}}
						className={styles.menu}
						alt="menu"
					/>
				</div>
			</div>
		</div>
	);
}
