"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "./ui/button";

const AuthScreen = () => {
  const [authType, setAuthType] = useState<"login" | "register">("login");

  const handleAuthTypeChange = (newType: "login" | "register") => {
    setAuthType(newType);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Sneak</h1>
      <p className="mt-2 text-lg">Sneaker store</p>
      <div className="mt-4 flex space-x-4">
        <Button variant="default" onClick={() => handleAuthTypeChange("login")}>
          Sign In
        </Button>
        <Button
          variant="default"
          onClick={() => handleAuthTypeChange("register")}
        >
          Sign Up
        </Button>
      </div>
      {authType === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthScreen;
