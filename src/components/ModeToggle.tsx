"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Loader2, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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
    return (
      <Button variant="ghost" className={cn("animate-spin", className)}>
        <Loader2 className="h-3 antialiased sm:h-4" />
      </Button>
    );
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
