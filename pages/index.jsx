import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import HomePage from "../components/home/Home";
import { useContractKit } from "@celo-tools/use-contractkit";
import { ContractKitProvider } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";

function App() {
	const { address, connect } = useContractKit();

	return (
		<>
			<main>
				<p>{address}</p>
				<button onClick={connect}>Click here to connect your wallet</button>
			</main>
			<HomePage />
		</>
	);
}

export default function Home() {
	return (
		<ContractKitProvider
			dapp={{
				name: "NFT MarketPlace",
				description: "NFT Marketplace on CELO",
				url: "https://example.com",
			}}
		>
			<App />
		</ContractKitProvider>
	);
}
