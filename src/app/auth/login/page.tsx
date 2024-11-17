'use client';

import Link from 'next/link';
import LoginForm from "@/components/LoginForm";
import { signIn } from "next-auth/react";
import { useState } from 'react';
import SocialButton from '@/components/SocialButton';


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Blank function for now
    const result = await signIn("credentials", {
      redirect: true, // Automatically redirect after login
      email,
      password,
    });
    console.log(result);
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
