import { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

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
				<header className="bg-white shadow-sm">
					<nav className="container mx-auto px-4 py-3 flex justify-between items-center">
						<Link href="/" className="text-xl font-bold text-blue-600">
							FinanceApp
						</Link>
						<ul className="flex space-x-4">
							<li>
								<Link href="/dashboard" className="hover:text-blue-600">
									Dashboard
								</Link>
							</li>
							<li>
								<Link href="/banking" className="hover:text-blue-600">
									Banking
								</Link>
							</li>
							<li>
								<Link href="/payments" className="hover:text-blue-600">
									Payments
								</Link>
							</li>
							<li>
								<Link href="/investments" className="hover:text-blue-600">
									Investments
								</Link>
							</li>
							<li>
								<Link href="/fraud-detection" className="hover:text-blue-600">
									Fraud Detection
								</Link>
							</li>
							<li>
								<Link href="/about" className="hover:text-blue-600">
									About
								</Link>
							</li>
						</ul>
						<Link
							href="/auth"
							className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
						>
							Login / Sign Up
						</Link>
					</nav>
				</header>

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
