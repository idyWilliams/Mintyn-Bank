"use client";
import { useEffect } from "react";
import Dashboard from "./dashboard/page";
import DefaultLayout from "./layout/page";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.innerWidth);
    }
  }, []);
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
}
