"use client";

import { useCallback, useEffect, useState } from "react";

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "USER";
}

// Simple localStorage-based auth
const STORAGE_KEY = 'pajak_user';
const AUTH_KEY = 'pajak_auth';

export function useSession() {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    setIsLoading(true);

    try {
      // Check localStorage for auth
      const authStatus = localStorage.getItem(AUTH_KEY);
      const storedUser = localStorage.getItem(STORAGE_KEY);

      if (authStatus === 'authenticated' && storedUser) {
        // Create admin user object
        const adminUser: SessionUser = {
          id: '1',
          email: 'admin@pajak.local',
          name: 'Administrator',
          role: 'ADMIN',
        };
        setUser(adminUser);
        return adminUser;
      } else {
        setUser(null);
        return null;
      }
    } catch {
      setUser(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const logout = useCallback(async () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return {
    user,
    isAuthenticated: Boolean(user),
    isLoading,
    refresh,
    logout,
  };
}
