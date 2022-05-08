const NFT = artifacts.require("NFT");
module.exports = function (deployer) {
	deployer.deploy(NFT, "0xaf6a49332E7217C9f1Dd5341891422C5bbBA65eD");
};
