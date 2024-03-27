"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface ModeToggleProps {
  variant: "dropdownButton" | "none";
  className?: string;
}

const ModeToggle = ({ className, variant }: ModeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getTheme = () => {
    return theme === "dark" ? "Dark" : "Light";
  };

  const getIcon = () => {
    const className = "h-3 antialiased sm:h-4";

    return theme === "light" ? (
      <Sun className={className} />
    ) : (
      <Moon className={className} />
    );
  };

  return (
    <Button variant={variant} className={className} onClick={toggleTheme}>
      {getTheme()}
      {getIcon()}
    </Button>
  );
};

export default ModeToggle;
