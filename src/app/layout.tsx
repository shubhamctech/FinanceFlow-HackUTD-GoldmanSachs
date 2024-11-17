import { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import NavBar from "@/components/NavBar";

interface RootLayoutProps {
	children: ReactNode;
}

export const metadata = {
	title: "Financial Services App",
	description: "Your trusted partner for banking, payments, and investments",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <div className="flex flex-col items-center">
          <NavBar />
        {/* ... (rest of the Home component code) */}
        </div>

				<main className="flex-grow container mx-auto px-4 py-8">
					{children}
				</main>

				<footer className="bg-gray-100 text-center py-4 mt-8">
					<div className="container mx-auto px-4">
						<p>&copy; 2024 HackUTD. All rights reserved.</p>
						<div className="mt-2">
							<Link
								href="/privacy"
								className="text-blue-600 hover:underline mr-4"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-blue-600 hover:underline mr-4"
							>
								Terms of Service
							</Link>
							<Link href="/contact" className="text-blue-600 hover:underline">
								Contact Us
							</Link>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
