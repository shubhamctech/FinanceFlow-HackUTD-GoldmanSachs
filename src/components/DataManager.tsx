// app/components/DataManager.tsx
"use client";

import { useState } from "react";

export function DataManager() {
	const [ipfsHash, setIpfsHash] = useState("");
	const [retrievedData, setRetrievedData] = useState(null);

	const storeData = async () => {
		const data = {
			example: "This is some example data",
			created: new Date().toISOString(),
			someNums: [1, 2, 3, 4, 5],
		};
		const response = await fetch("/api/pinata", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		const result = await response.json();
		setIpfsHash(result.ipfsHash);
	};

	const retrieveData = async () => {
		if (!ipfsHash) return;
		const response = await fetch(`/api/pinata?ipfsHash=${ipfsHash}`);
		const data = await response.json();
		setRetrievedData(data);
	};

	return (
		<div>
			<button onClick={storeData}>Store Data</button>
			<p>IPFS Hash: {ipfsHash}</p>
			<button onClick={retrieveData}>Retrieve Data</button>
			<pre>{JSON.stringify(retrievedData, null, 2)}</pre>
		</div>
	);
}
