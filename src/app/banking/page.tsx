"use client";

import { useState } from "react";
import Link from "next/link";

// Hardcoded user data
const users = [
	{
		userId: 1,
		userEmail: "user1@example.com",
		userName: "John Doe",
		account_number: "************1234",
		savings: {
			balance: 5000,
			transactions: [
				{ amount: +200, category: "deposit" },
				{ amount: -50, category: "groceries" },
				{ amount: -300, category: "travel" },
				{ amount: +1000, category: "salary" },
			],
		},
		checking: {
			balance: 2000,
			transactions: [
				{ amount: +1000, category: "salary" },
				{ amount: -300, category: "rent" },
				{ amount: -50, category: "groceries" },
			],
		},
		creditCard: {
			creditLimit: 10000,
			amountUsed: 2000,
			transactions: [
				{ amount: -500, category: "travel" },
				{ amount: -100, category: "dining" },
			],
		},
	},
];

const BankingPage = () => {
	const [selectedUser] = useState(users[0]); // For simplicity, selecting the first user
	const [depositAmount, setDepositAmount] = useState<string>("");
	const [withdrawAmount, setWithdrawAmount] = useState<string>("");

	const handleDeposit = (amount: string) => {
		const numericAmount = parseFloat(amount);
		if (!isNaN(numericAmount) && numericAmount > 0) {
			selectedUser.checking.balance += numericAmount;
			selectedUser.checking.transactions.push({
				amount: numericAmount,
				category: "deposit",
			});
			setDepositAmount(""); // Clear input
		}
	};

	const handleWithdraw = (amount: string) => {
		const numericAmount = parseFloat(amount);
		if (
			!isNaN(numericAmount) &&
			numericAmount > 0 &&
			selectedUser.checking.balance >= numericAmount
		) {
			selectedUser.checking.balance -= numericAmount;
			selectedUser.checking.transactions.push({
				amount: -numericAmount,
				category: "withdrawal",
			});
			setWithdrawAmount(""); // Clear input
		}
	};

	return (
		<div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
			<h1 className="text-3xl font-bold mb-6">
				Banking Overview for {selectedUser.userName}
			</h1>

			{/* Checking Account Section */}
			<div className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-xl">
				<h2 className="text-xl font-semibold mb-4">Checking Account</h2>
				<p className="text-lg">
					Balance: ${selectedUser.checking.balance.toFixed(2)}
				</p>

				<h3 className="text-lg font-semibold mt-4">Recent Transactions</h3>
				<ul className="mt-2">
					{selectedUser.checking.transactions.map((transaction, index) => (
						<li
							key={index}
							className={`flex justify-between py-2 ${
								transaction.amount < 0 ? "text-red-600" : "text-blue-600"
							}`}
						>
							<span>
								{transaction.category.charAt(0).toUpperCase() +
									transaction.category.slice(1)}
								:
							</span>
							<span>${Math.abs(transaction.amount).toFixed(2)}</span>
						</li>
					))}
				</ul>

				{/* Deposit and Withdraw Section */}
				<div className="mt-6 flex flex-col space-y-4">
					<div className="flex space-x-4">
						<input
							type="number"
							value={depositAmount}
							onChange={(e) => setDepositAmount(e.target.value)}
							placeholder="Deposit Amount"
							className="border border-gray-300 rounded p-2 flex-grow"
						/>
						<button
							onClick={() => handleDeposit(depositAmount)}
							className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
						>
							Deposit
						</button>
					</div>

					<div className="flex space-x-4">
						<input
							type="number"
							value={withdrawAmount}
							onChange={(e) => setWithdrawAmount(e.target.value)}
							placeholder="Withdraw Amount"
							className="border border-gray-300 rounded p-2 flex-grow"
						/>
						<button
							onClick={() => handleWithdraw(withdrawAmount)}
							className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
						>
							Withdraw
						</button>
					</div>
				</div>
			</div>

			{/* Savings Account Section */}
			<div className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-xl">
				<h2 className="text-xl font-semibold mb-4">Savings Account</h2>
				<p className="text-lg">
					Balance: ${selectedUser.savings.balance.toFixed(2)}
				</p>

				<h3 className="text-lg font-semibold mt-4">Recent Transactions</h3>
				<ul className="mt-2">
					{selectedUser.savings.transactions.map((transaction, index) => (
						<li
							key={index}
							className={`flex justify-between py-2 ${
								transaction.amount < 0 ? "text-red-600" : "text-blue-600"
							}`}
						>
							<span>
								{transaction.category.charAt(0).toUpperCase() +
									transaction.category.slice(1)}
								:
							</span>
							<span>${Math.abs(transaction.amount).toFixed(2)}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Credit Card Section */}
			<div className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-xl">
				<h2 className="text-xl font-semibold mb-4">Credit Card</h2>
				<p>Account Number (Masked): {selectedUser.account_number}</p>
				<p>Credit Limit: ${selectedUser.creditCard.creditLimit.toFixed(2)}</p>
				<p>Amount Used: ${selectedUser.creditCard.amountUsed.toFixed(2)}</p>

				<h3 className="text-lg font-semibold mt-4">Recent Transactions</h3>
				<ul className="mt-2">
					{selectedUser.creditCard.transactions.map((transaction, index) => (
						<li
							key={index}
							className={`flex justify-between py-2 text-red-600`}
						>
							<span>
								{transaction.category.charAt(0).toUpperCase() +
									transaction.category.slice(1)}
								:
							</span>
							<span>${Math.abs(transaction.amount).toFixed(2)}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BankingPage;
