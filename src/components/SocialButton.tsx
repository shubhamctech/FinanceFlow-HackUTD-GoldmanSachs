import { useRouter } from 'next/navigation';
import React from 'react';

// Define a union type for provider
type Provider = 'google' | 'microsoft';

interface SocialButtonProps {
  provider: Provider; // Restrict provider to specific values
  text: string;
}

export default function SocialButton({ provider, text }: SocialButtonProps) {
  const icons: Record<Provider, string> = {
    google: '/google.svg', // Use a Google icon SVG
    microsoft: '/microsoft.svg', // Use a Microsoft icon SVG
  };

  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/auth/login");
      }}
      className="flex items-center w-full px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100"
    >
      <img src={icons[provider]} alt={`${provider} icon`} className="w-5 h-5" />
      <span className="flex-1 text-center text-sm font-medium">{text}</span>
    </button>
  );
}