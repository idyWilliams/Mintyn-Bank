"use client";
import { ReactNode, useEffect, useState } from "react";

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

const SidebarLinkGroup = ({
  children,
  activeCondition,
}: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };
    useEffect(() => {
      if (typeof window !== "undefined") {
        //This code is executed in the browser
        console.log(window.innerWidth);
      }
    }, []);
   useEffect(() => {
     if (typeof window !== "undefined") {
       // Your client-side code that uses window goes here
     }
   }, []);

  return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
