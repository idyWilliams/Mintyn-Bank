'use client'
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import React, { useState, ReactNode, useEffect } from "react";

type LayoutProps = {
  children?: React.ReactNode;
};
export default function DefaultLayout(props: LayoutProps) {
    const { children} = {
      ...props,

    };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.innerWidth);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
