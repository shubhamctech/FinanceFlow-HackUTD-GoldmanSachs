import Link from "next/link";
import Image from "next/image";
// app/page.tsx
import { DataManager } from "../components/DataManager";

export default function Home() {
	// `session` will match the returned value of `callbacks.session()` from `NextAuth()`
	return (
		<div className="flex flex-col items-center">
			<main>
				<h1>Pinata Data Management</h1>
				<DataManager />
			</main>

			{/* Hero Section */}
			<section className="text-center py-20 bg-blue-50 w-full">
				<h1 className="text-4xl font-bold mb-4">Welcome to FinanceApp</h1>
				<p className="text-xl mb-8">
					Your trusted partner for banking, payments, and investments
				</p>
				<Link
					href="/auth"
					className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
				>
					Get Started
				</Link>
			</section>

			{/* Features Section */}
			<section className="py-16 w-full">
				<h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
					<FeatureCard
						title="Secure Banking"
						description="Manage your accounts, transfer funds, and track your spending with our secure online banking platform."
						icon="/icons/banking.svg"
					/>
					<FeatureCard
						title="Easy Payments"
						description="Send and receive payments quickly and securely, whether you're paying bills or splitting costs with friends."
						icon="/icons/payments.svg"
					/>
					<FeatureCard
						title="Smart Investments"
						description="Grow your wealth with our range of investment options, from stocks and bonds to mutual funds and ETFs."
						icon="/icons/investments.svg"
					/>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-blue-600 text-white py-16 w-full">
				<div className="text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to take control of your finances?
					</h2>
					<p className="mb-8">
						Join thousands of satisfied customers who trust FinanceApp for their
						financial needs.
					</p>
					<Link
						href="/auth"
						className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
					>
						Create Your Account
					</Link>
				</div>
			</section>
		</div>
	);
}

function FeatureCard({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: string;
}) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md text-center">
			<div className="w-16 h-16 mx-auto mb-4">
				<Image src={icon} alt={title} width={64} height={64} />
			</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}
