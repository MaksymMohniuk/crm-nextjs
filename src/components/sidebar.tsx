"use client";

import React from "react";
import Image from "next/image";
import SidebarItem from "../components/sidebar-item";
import { usePathname, useRouter } from "next/navigation";

export interface SidebarProps {}
export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathName = usePathname();
  const handleExitClick = () => {
    router.push("/");
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/images/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            current={pathName === "/dashboard"}
            pathname="/dashboard"
            src="/images/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathName === "/companies"}
            pathname="/companies"
            src="/images/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={handleExitClick}
        >
          <Image
            width={18}
            height={18}
            src="/images/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
