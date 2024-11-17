// app/api/pinata/route.ts
import { pinataService } from "@/services/pinataService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const data = await request.json();
	try {
		const ipfsHash = await pinataService.uploadJSON(data);
		return NextResponse.json({ ipfsHash });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to upload data" },
			{ status: 500 }
		);
	}
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const ipfsHash = searchParams.get("ipfsHash");
	if (!ipfsHash) {
		return NextResponse.json(
			{ error: "IPFS hash is required" },
			{ status: 400 }
		);
	}
	try {
		const data = await pinataService.retrieveJSON(ipfsHash);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to retrieve data" },
			{ status: 500 }
		);
	}
}
