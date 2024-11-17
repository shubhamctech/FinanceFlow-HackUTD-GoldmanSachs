"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Left part: Hamburger menu on mobile */}
					<div className="flex items-center">
						<div className="md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
							>
								{/* Icon for menu */}
								<svg
									className="h-6 w-6 mr-2"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 24 24"
								>
									{isOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>
						{/* Logo */}
						<div className="flex-shrink-0 ml-2">
							<Link href="/">
								<span className="text-xl font-bold text-blue-600">
									FinanceApp
								</span>
							</Link>
						</div>
					</div>

					{/* Center part: Nav links */}
					<ul className="hidden md:flex md:space-x-8">
						<li>
							<Link
								href="/dashboard"
								className="text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
							>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								href="/banking"
								className="text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
							>
								Banking
							</Link>
						</li>
						<li>
							<Link
								href="/investments"
								className="text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
							>
								Investment
							</Link>
						</li>
						<li>
							<Link
								href="/articles"
								className="text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
							>
								Articles
							</Link>
						</li>
					</ul>
					<Link
						href="/auth"
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:underline"
					>
						Login / Sign Up
					</Link>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-5 pt-2 pb-3 space-y-3 sm:px-3">
						<Link
							href="/dashboard"
							className="block text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
						>
							Dashboard
						</Link>
						<Link
							href="/banking"
							className="block text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
						>
							Banking
						</Link>
						<Link
							href="/investments"
							className="block text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
						>
							Investments
						</Link>
						<Link
							href="/articles"
							className="block text-gray-700 hover:text-blue-600 hover:font-bold hover:underline"
						>
							Articles
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
