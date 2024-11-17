import { useRouter } from 'next/navigation';
import React from 'react';

interface SocialButtonProps {
  provider: string;
  text: string;
  onClick: () => void;
}

export default function SocialButton(props: { children?: React.ReactNode, provider: string, text: string }) {

  const icons = {
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
      <img src={icons[props.provider]} alt={`${props.provider} icon`} className="w-5 h-5" />
      <span className="flex-1 text-center text-sm font-medium">{props.text}</span>
    </button>
  );
}
