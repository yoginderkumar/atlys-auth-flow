import React, { createContext, useState, useContext, ReactNode } from "react";
import { LOGIN_TIME, REGISTER_TIME } from "../constants";
import { userService } from "../services";
import { AuthUser } from "../types";


interface AuthContextType {
  user: AuthUser | null;
  registering?: boolean;
  authenticating?: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [registering, setRegistering] = useState<boolean>(false);
  const [authenticating, setAuthenticating] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setAuthenticating(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        userService
          .loginUser(email, password)
          .then((user) => {
            setAuthenticating(false);
            setUser({
              id: user.uid,
              email: user.email,
              name: user?.name || user.username,
            });
            resolve();
          })
          .catch((error) => {
            setAuthenticating(false);
            reject(error as Error);
          });
      }, LOGIN_TIME);
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // This is a mock implementation. In a real app, you'd call an API here.
    setRegistering(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        userService
          .registerUser(name, email, password)
          .then((user) => {
            setRegistering(false);
            setUser({
              id: user.uid,
              email: user.email,
              name: user?.name || user.username,
            });
            resolve();
          })
          .catch((error) => {
            setRegistering(false);
            reject(error as Error);
          });
      }, REGISTER_TIME);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, registering, authenticating, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
