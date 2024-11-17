"use client";

import { SessionProvider, signIn } from 'next-auth/react';
import Link from 'next/link';
import SocialButton from '@/components/SocialButton';
import UserStatus from "@/components/UserStatus";

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    console.log('Email submitted:', email);
    // Handle email-based registration logic (optional)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">Create your account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="username"
            name="username"
            placeholder="Username"
            required
            className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Create account.
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
        <div className="flex items-center justify-center space-x-2">
          <span className="w-full h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <span className="w-full h-px bg-gray-300" />
        </div>
        <div className="space-y-2">
          <SocialButton
            provider="google"
            text="Continue with Google"
          />
          <SocialButton
            provider="microsoft"
            text="Continue with Microsoft Account"
          />
        </div>
      </div>
    </div>
  );
}
