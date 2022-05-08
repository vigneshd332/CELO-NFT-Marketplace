import React from "react";
import styles from "./Icon.module.css";
import Image from "next/image";

// USAGE: <Icon name="heart" size="24" />

function Icon(props) {
	return (
		<span className={styles.icon}>
			{props.name === "heart" && (
				<Image
					height={props.size}
					width={props.size}
					src={require("../../public/images/icons/heart.svg")}
					alt=""
				/>
			)}

			{props.name === "heart-filled" && (
				<Image
					height={props.size}
					width={props.size}
					src={require("../../public/images/icons/heart-filled.svg")}
					alt=""
				/>
			)}

			{props.name === "search" && (
				<Image
					height={props.size}
					width={props.size}
					src={require("../../public/images/icons/search.svg")}
					alt=""
				/>
			)}

			{props.name === "down" && (
				<Image
					height={props.size}
					width={props.size}
					src={require("../../public/images/icons/down.svg")}
					alt=""
				/>
			)}

			{props.name === "close" && (
				<Image
					height={props.size}
					width={props.size}
					src={require("../../public/images/icons/close.svg")}
					alt=""
				/>
			)}

			{props.name === "dark-mode" && (
				<Image
					height={props.size}
					width={props.size}
					src={require("../../public/images/icons/dark-mode.png")}
					alt=""
				/>
			)}
		</span>
	);
}

export default Icon;
