import React, { useEffect } from "react";
import classes from "./Home.module.css";

import SellerCard from "../SellerCard/SellerCard.js";
import NFTCard from "../NFTCard/NFTCard.js";
import Link from "next/link";

const AllUsers = [
	{
		id: "mia_ayana",
		img: "/img/UserImages/mia_ayana.png",
		name: "Mia Ayana",
		eths: "5.250",
		bannerImg: "/img/profile-banner.png",
		num: 1,
	},
	{
		id: "rian_leon",
		img: "/img/UserImages/rian_leon.jpg",
		name: "Rian Leon",
		eths: "4.932",
		bannerImg: "/img/profile-banner.png",
		num: 2,
	},
	{
		id: "lady_young",
		img: "/img/UserImages/lady_young.jpg",
		name: "Lady Young",
		eths: "4.620",
		bannerImg: "/img/profile-banner.png",
		num: 3,
	},
	{
		id: "black_glass",
		img: "/img/UserImages/black_glass.jpg",
		name: "Black glass",
		eths: "4.125",
		bannerImg: "/img/profile-banner.png",
		num: 4,
	},
	{
		id: "budhiman",
		img: "/img/UserImages/budhiman.jpg",
		name: "Budhiman",
		eths: "3.921",
		bannerImg: "/img/profile-banner.png",
		num: 5,
	},
];

const AllProfileItems = [
	{
		id: 1,
		imgURL: "/img/NFTImages/NFT1.png",
		name: "Abstract Smoke Red Blue",
		amount: "1.25",
		liked: true,
		likes: "92",
		author: "mia_ayana",
	},
	{
		id: 2,
		imgURL: "/img/NFTImages/NFT2.png",
		name: "Mountain Landscape",
		amount: "0.20",
		liked: false,
		likes: "25",
		author: "mia_ayana",
	},
	{
		id: 3,
		imgURL: "/img/NFTImages/NFT3.png",
		name: "Paint Color on Wall",
		amount: "0.00",
		liked: true,
		likes: "55",
		author: "mia_ayana",
	},
	{
		id: 4,
		imgURL: "/img/NFTImages/NFT4.png",
		name: "Abstract Pattern",
		amount: "0.87",
		liked: true,
		likes: "82",
		author: "mia_ayana",
	},
	{
		id: 5,
		imgURL: "/img/NFTImages/NFT5.png",
		name: "White Line Grafiti",
		amount: "0.09",
		liked: false,
		likes: "22",
		author: "mia_ayana",
	},
	{
		id: 6,
		imgURL: "/img/NFTImages/NFT6.png",
		name: "Abstract Triangle",
		amount: "0.90",
		liked: true,
		likes: "71",
		author: "mia_ayana",
	},
	{
		id: 7,
		imgURL: "/img/NFTImages/NFT7.png",
		name: "Lake Landscape",
		amount: "0.52",
		liked: true,
		likes: "63",
		author: "rian_leon",
	},
	{
		id: 8,
		imgURL: "/img/NFTImages/NFT8.png",
		name: "Blue Red Art",
		amount: "0.85",
		liked: false,
		likes: "66",
		author: "lady_young",
	},
];

const Banner = () => {
	return (
		<div className={classes.bannerWrapper}>
			<div className={classes.banner}>
				<div className={classes.circle1}></div>
				<div className={classes.circle2}></div>
				<div className={classes.bannerContent}>
					Discover, collect, and sell <br />
					extraordinary NFTs
				</div>
			</div>
		</div>
	);
};

const TopSellers = () => {
	// const sellerArray = getTopSellers();
	const sellerArray = AllUsers;
	return (
		<div className={classes.sellers}>
			<div className={classes.sellerTitle}>Top Sellers</div>
			<div className={classes.sellerCont}>
				{sellerArray.map((seller) => (
					<Link href={`/profile/${seller.id}`} passHref key={seller.id}>
						<SellerCard
							className={classes.sellerCard}
							num={seller.num}
							img={seller.img}
							eth={seller.eths}
							name={seller.name}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

const HotBids = () => {
	// const bidsArray = getProfileItems("");
	const bidsArray = AllProfileItems;

	return (
		<div className={classes.sellers}>
			<div className={classes.sellerTitle}>Hot Bids</div>
			<div className={classes.hotCont}>
				{bidsArray.map(({ liked, likes, imgURL, amount, name, id }) => (
					<div key={name} className={classes.cardWrapper}>
						<NFTCard
							liked={liked}
							likes={likes}
							imgURL={imgURL}
							amount={amount}
							name={name}
							idx={id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={classes.container}>
			<Banner />
			<TopSellers />
			<HotBids />
			<div className={classes.buttonContainer}>
				<button className={classes.buttonOutline}>Load More</button>
			</div>
		</div>
	);
}
