import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
  isAuthenticated: boolean;
  handleLogin: (newUser: string) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  const isAuthenticated = !!user;

  const handleLogin = (newUser: string) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
