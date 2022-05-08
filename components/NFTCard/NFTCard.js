import React from "react";
import Icon from "../Icon/Icon";
import styles from "./NFTCard.module.css";
import Link from "next/link";

// USAGE: <NFTCard imgURL="" name="NFT Name" amount="0.00" liked likes="92" />

function NFTCard(props) {
	return (
		<Link href={`/item/${props.idx}`} passHref>
			<div className={styles.card}>
				<div className={styles.imageContainer}>
					<img
						className={styles.image}
						src={props.imgURL}
						width="100%"
						height="100%"
						alt={props.name + " NFT Image"}
					/>
				</div>
				<div className={styles.detailsContainer}>
					<div className={styles.name}>{props.name}</div>
					<div className={styles.details}>
						<div>
							<span className={styles.num}>{props.amount}</span>{" "}
							<span className={styles.smallText}>ETH</span>
						</div>
						<div className={styles.likeButton}>
							<span className={styles.icon}>
								{props.liked ? (
									<Icon name="heart-filled" size="12" />
								) : (
									<Icon name="heart" size="12" />
								)}
							</span>
							<span className={styles.smallText}>{props.likes}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default NFTCard;
