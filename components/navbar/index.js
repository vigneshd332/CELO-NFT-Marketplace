import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import logo from "../../public/images/Light2.png";
import logoDark from "../../public/images/Dark2.png";
import menu from "../../public/images/icons/Menu.png";
import MobileMenu from "../mobileMenu/index.js";
import Icon from "../Icon/Icon";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Nav(props) {
	const [mobileMenu, setMobile] = useState(false);
	const [searchText, setSearchText] = useState("");
	const { pathname } = useRouter();

	return (
		<div>
			{mobileMenu ? (
				<MobileMenu setMobile={setMobile} className={styles.mobileMenu} />
			) : null}
			<div className={styles.container}>
				<div>
					<Link href={"/"} passHref>
						{!props.darkMode ? (
							<Image src={logo} alt="Main Logo" className={styles.img} />
						) : (
							<Image
								src={logoDark}
								alt="Main Logo"
								className={styles.img}
							/>
						)}
					</Link>
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
				<Link href={"/explore"} passHref>
					<div
						className={`${styles.navLink} ${
							pathname === "/explore" ? styles.navLinkActive : null
						}`}
					>
						Explore
					</div>
				</Link>
				<Link href={"/my-items"} passHref>
					<div
						className={`${styles.navLink} ${
							pathname === "/my-items" ? styles.navLinkActive : null
						}`}
					>
						My Items
					</div>
				</Link>
				<Link href={"/following"} passHref>
					<div
						className={`${styles.navLink} ${
							pathname === "/following" ? styles.navLinkActive : null
						}`}
					>
						Following
					</div>
				</Link>
				<Link href={"/create"} passHref>
					<div>
						<button className={styles.button}>Create</button>
					</div>
				</Link>
				<Link href={"/connect"} passHref>
					<div>
						<button className={styles.buttonOutline}>Connect</button>
					</div>
				</Link>
				<div>
					<Image
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
