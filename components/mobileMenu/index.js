import React from "react";
import classes from "./style.module.css";
import Link from "next/link";
import logo from "../../public/images/Light.png";
import cross from "../../public/images/icons/Cross.png";
import Image from "next/image";

const MobileMenu = ({ setMobile }) => {
	return (
		<div>
			<div className={classes.cont}>
				<div className={classes.container}>
					<Link href={"/"} passHref>
						<Image src={logo} alt="Main Logo" className={classes.img} />
					</Link>
					<Image
						src={cross}
						alt="Cross"
						className={classes.img + " " + classes.closeButton}
						onClick={() => {
							setMobile(false);
						}}
					/>
				</div>

				<div className={classes.navWrapper}>
					<Link href={"/explore"} passHref>
						<div
							className={classes.navLink}
							onClick={() => {
								setMobile(false);
							}}
						>
							Explore
						</div>
					</Link>
					<Link href={"/my-items"}>
						<div
							className={classes.navLink}
							onClick={() => {
								setMobile(false);
							}}
						>
							My Items
						</div>
					</Link>
					<Link href={"/following"}>
						<div
							className={classes.navLink}
							onClick={() => {
								setMobile(false);
							}}
						>
							Following
						</div>
					</Link>
				</div>

				<div className={classes.navFooter}>
					<div className={classes.footerWrapper}>
						<div>
							<Link href={"/create"} passHref>
								<button
									className={classes.button}
									onClick={() => {
										setMobile(false);
									}}
								>
									Create
								</button>
							</Link>
						</div>
						<div>
							<Link href={"/connect"} passHref>
								<button
									className={classes.buttonOutline}
									onClick={() => {
										setMobile(false);
									}}
								>
									Connect
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
