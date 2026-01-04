"use client";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex h-16 items-center px-4 container mx-auto">
      <div className="text-2xl flex-1">
        <Link href="/" className="flex items-center">
          <span className="inline drop-shadow-lg font-poppins">
            Wavinn
          </span>
        </Link>
      </div>

      <a
        href="https://github.com/avgmecoding/Wavinn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-xl border
                   hover:bg-gray-400 dark:hover:bg-zinc-800 transition"
      >
        <Github size={18} />
        <span className="text-sm font-medium">Star Project</span>
      </a>
    </div>
  );
}
