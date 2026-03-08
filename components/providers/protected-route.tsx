'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const AUTH_KEY = 'pajak_auth';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const authStatus = localStorage.getItem(AUTH_KEY);
    
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    } else if (pathname !== '/login') {
      router.push('/login');
    }
    
    setIsLoading(false);
  }, [pathname, router]);

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Allow access to login page without authentication
  if (pathname === '/login') {
    return <>{children}</>;
  }

  // Protect other routes
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
