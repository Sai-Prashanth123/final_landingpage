"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PublicClientApplication, AccountInfo } from "@azure/msal-browser";
import msalConfig, { loginRequest } from "./msalConfig";

interface UserData {
  name?: string;
  username?: string;
  email?: string;
  idTokenClaims?: {
    given_name?: string;
    family_name?: string;
    emails?: string[];
    name?: string;
  };
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserData | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: async () => {},
  getToken: async () => null,
});

// Initialize MSAL outside of component
const msalInstance = new PublicClientApplication(msalConfig);
let msalInitialized = false;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [interactionInProgress, setInteractionInProgress] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const processUserAccount = (account: AccountInfo | null) => {
    if (!account) return null;
    
    return {
      name: account.name || account.username,
      username: account.username,
      email: account.username,
      idTokenClaims: account.idTokenClaims
    };
  };

  useEffect(() => {
    const initializeMsal = async () => {
      if (!msalInitialized) {
        try {
          await msalInstance.initialize();
          msalInitialized = true;
          setIsInitialized(true);
        } catch (error) {
          console.error("MSAL initialization failed:", error);
          return;
        }
      }

      try {
        const response = await msalInstance.handleRedirectPromise();
        
        if (response) {
          setIsAuthenticated(true);
          setUser(processUserAccount(response.account));
          if (window.location.pathname !== '/dashboard') {
            window.location.href = '/dashboard';
          }
          return;
        }

        const currentAccounts = msalInstance.getAllAccounts();
        if (currentAccounts.length > 0) {
          setIsAuthenticated(true);
          setUser(processUserAccount(currentAccounts[0]));
          if (window.location.pathname !== '/dashboard') {
            window.location.href = '/dashboard';
          }
        }
      } catch (error) {
        console.error("Auth Error:", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setInteractionInProgress(false);
      }
    };

    // Subscribe to MSAL events
    const callbackId = msalInstance.addEventCallback((message) => {
      if (message.eventType === "msal:loginStart" || message.eventType === "msal:logoutStart") {
        setInteractionInProgress(true);
      }
      if (message.eventType === "msal:loginSuccess" || message.eventType === "msal:logoutSuccess" ||
          message.eventType === "msal:loginFailure" || message.eventType === "msal:logoutFailure") {
        setInteractionInProgress(false);
      }
    });

    initializeMsal();

    return () => {
      if (callbackId) {
        msalInstance.removeEventCallback(callbackId);
      }
    };
  }, []);

  const login = async () => {
    if (!isInitialized) {
      console.warn("MSAL not initialized yet");
      return;
    }

    if (interactionInProgress) {
      console.warn("Login blocked - interaction in progress");
      return;
    }

    try {
      setInteractionInProgress(true);
      await msalInstance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login failed:", error);
      setInteractionInProgress(false);
    }
  };

  const logout = async () => {
    if (!isInitialized) {
      console.warn("MSAL not initialized yet");
      return;
    }

    if (interactionInProgress) {
      console.warn("Logout blocked - interaction in progress");
      return;
    }

    try {
      setInteractionInProgress(true);
      const account = msalInstance.getAllAccounts()[0];
      if (account) {
        await msalInstance.logoutRedirect({
          account,
          postLogoutRedirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
      setInteractionInProgress(false);
    }
  };

  const getToken = async (): Promise<string | null> => {
    if (!isInitialized) {
      console.warn("MSAL not initialized yet");
      return null;
    }

    try {
      const account = msalInstance.getAllAccounts()[0];
      if (!account) return null;

      const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account,
      });
      return response.accessToken;
    } catch (error) {
      console.error("Error getting token:", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
