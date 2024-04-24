"use client";

import { getSession } from "@/lib";
import { useEffect, useState } from "react";
import AuthScreen from "./AuthScreen";
import { redirect } from "next/navigation";

const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSession();
        setSession(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 0);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (session) {
    return <>{children}</>;
  } else if (!session) {
    redirect("/auth");
  }
};

export default SessionProvider;
