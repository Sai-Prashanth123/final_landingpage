"use client";

import { useAuth } from '@/lib/auth/AuthContext';

export default function LoginButton() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <button onClick={isAuthenticated ? logout : login}>
      {isAuthenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
} 