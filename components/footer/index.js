import React from "react";
import styles from "./styles.module.css";
import logo from "../../public/images/light2.png";
import darkLogo from "../../public/images/dark2.png";
import insta from "../../public/images/icons/Social/instagram.svg";
import twitter from "../../public/images/icons/Social/twitter.svg";
import telegram from "../../public/images/icons/Social/telegram.svg";
import discord from "../../public/images/icons/Social/discord.svg";
import Icon from "../Icon/Icon";
import Image from "next/image";

export default function Footer(props) {
	return (
		<section>
			<section className={styles.footerContainer}>
				<section className={styles.footerWrapper}>
					<section className={styles.footerAboutCol}>
						<section className={styles.footerTitle}>
							<div>
								{props.darkMode && (
									<Image
										src={darkLogo}
										alt="Main logo"
										className={styles.footerImage}
									/>
								)}
								{!props.darkMode && (
									<Image
										src={logo}
										alt="Main logo"
										className={styles.footerImage}
									/>
								)}
							</div>
							<div
								onClick={() => props.setDarkMode(!props.darkMode)}
								className={styles.darkModeButton}
							>
								<Icon name="dark-mode" size="24" />
							</div>
						</section>
						<p className={styles.footerEmailHead}>
							Get the Latest Updates
						</p>
						<section className={styles.footerRowAbout}>
							<div className={styles.searchContainer}>
								<input
									className={styles.searchBar}
									type="text"
									placeholder="Your Email"
								/>
							</div>
							<button className={styles.button}>Email Me!</button>
						</section>
					</section>
					<section className={styles.footerColumn}>
						<section
							className={`${styles.footerTitle} ${styles.footerRow}`}
						>
							Graphique NFT
						</section>
						<section className={styles.footerRow}>Explore</section>
						<section className={styles.footerRow}>How it Works</section>
						<section className={styles.footerRow}>Contact Us</section>
					</section>
					<section className={styles.footerColumn}>
						<section
							className={`${styles.footerTitle} ${styles.footerRow}`}
						>
							Support
						</section>
						<section className={styles.footerRow}>Help Center</section>
						<section className={styles.footerRow}>
							Terms of Service
						</section>
						<section className={styles.footerRow}>Legal</section>
						<section className={styles.footerRow}>Privacy Policy</section>
					</section>
				</section>
			</section>
			<section className={styles.copyright}>
				Graphique NITT, All Rights Reserved.
				<p className={styles.footerSocialList}>
					<Image
						src={insta}
						alt="Insta Logo"
						className={styles.footerSocialMedia}
					/>
					<Image
						src={twitter}
						alt="Twitter Logo"
						className={styles.footerSocialMedia}
					/>
					<Image
						src={telegram}
						alt="Telegram Logo"
						className={styles.footerSocialMedia}
					/>
					<Image
						src={discord}
						alt="Discord Logo"
						className={styles.footerSocialMedia}
					/>
				</p>
			</section>
		</section>
	);
}
