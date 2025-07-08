"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Drawer({
  currentLocale,
  pathnameWithoutLocale,
}: {
  currentLocale: string;
  pathnameWithoutLocale: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col justify-between px-4 py-16">
          <div className="font-primary flex flex-col items-end gap-8 text-end text-white">
            <a href={currentLocale === "en" ? "/en/" : "/"}>Home</a>
            <a href={currentLocale === "en" ? "/en/team" : "/team"}>Team</a>
            <a href={currentLocale === "en" ? "/en/contacts" : "/contacts"}>
              {currentLocale === "en" ? "Contacts" : "Contatti"}
            </a>
          </div>
          <div className="font-primary flex justify-end gap-8 text-end text-white uppercase">
            <a href={`/en/${pathnameWithoutLocale}`}>En</a>
            <a href={`/${pathnameWithoutLocale}`}>It</a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
