import Image from "next/image";
import React from "react";
import styles from "./SellerCard.module.css";

// USAGE: <SellerCard imgURL="/img/seller-card-placeholder.png" name="Mia Ayana" />

function SellerCard(props) {
	return (
		<div className={styles.card}>
			<div className={styles.num}>{props.num}</div>
			<div className={styles.dpContainer}>
				<Image
					width="100%"
					height="100%"
					className={styles.dp}
					src={props.img}
					alt={props.name + "'s image"}
				/>
				<Image
					width="100%"
					height="100%"
					className={styles.tick}
					src="/icons/seller-tick.svg"
					alt="Tick icon"
				/>
			</div>
			<div className={styles.name}>{props.name}</div>
		</div>
	);
}

export default SellerCard;
