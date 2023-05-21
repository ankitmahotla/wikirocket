"use client";
import Link from "next/link";
import Search from "./Search";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-blue-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">WikiRocket!</Link>
      </h1>
      {pathname !== "/" && <Search />}
    </nav>
  );
}
