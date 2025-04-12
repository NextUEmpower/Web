"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Img } from '../../components';

export default function LoadingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = () => {
      const storedUser = localStorage.getItem('user');
      
      setTimeout(() => {
        if (storedUser) {
          router.push('/dashboard');
        } else {
          router.push('/landingpaged');
        }
        setIsLoading(false);
      }, 1500);
    };

    checkAuthStatus();
  }, [router]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient1">
      <div className="flex flex-col items-center">
        <Img
          src="img_header_logo.svg"
          width={200}
          height={66}
          alt="NextU Logo"
          className="mb-8 h-auto w-[200px] object-contain"
        />
        
        {isLoading && (
          <div className="flex flex-col items-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent"></div>
            <p className="text-lg font-medium text-white">Loading your experience...</p>
          </div>
        )}
      </div>
    </div>
  );
}