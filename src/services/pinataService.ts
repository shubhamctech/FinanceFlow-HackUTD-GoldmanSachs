// services/pinataService.ts
import PinataSDK from "@pinata/sdk";

const pinata = new PinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

export const pinataService = {
	uploadJSON: async (jsonData: any) => {
		try {
			const result = await pinata.pinJSONToIPFS(jsonData);
			return result.IpfsHash;
		} catch (error) {
			console.error("Error uploading to Pinata:", error);
			throw error;
		}
	},

	retrieveJSON: async (ipfsHash: string) => {
		try {
			const url = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
			const response = await fetch(url);
			return await response.json();
		} catch (error) {
			console.error("Error retrieving from Pinata:", error);
			throw error;
		}
	},
};
