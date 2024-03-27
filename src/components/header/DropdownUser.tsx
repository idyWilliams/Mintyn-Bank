"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        // ref={trigger}
        // onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-xs font-light text-body dark:text-white">
            Hello
          </span>
          <span className="block text-xs text-body dark:text-white">
            Williams Idorenyin
          </span>
        </span>

        <span className="h-8 w-8">
          <Image
            width={100}
            height={100}
            src={"/image/williams.jpeg"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
            className="rounded-full"
          />
        </span>


      </Link>


    </div>
  );
};

export default DropdownUser;
