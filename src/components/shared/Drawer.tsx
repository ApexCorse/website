"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Drawer({
  currentLocale,
  pathnameWithoutLocale,
  applicationsUrl,
}: {
  currentLocale: string;
  pathnameWithoutLocale: string;
  applicationsUrl?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col justify-between px-4 py-16">
          <div className="font-primary flex flex-col items-end gap-8 text-end text-white">
            <a href={currentLocale === "en" ? "/en/" : "/"}>Home</a>
            <a href={currentLocale === "en" ? "/en/team" : "/team"}>Team</a>
            <a href={currentLocale === "en" ? "/en/blog" : "/blog"}>Blog</a>
            <a href={currentLocale === "en" ? "/en/sponsors" : "/sponsors"}>
              {currentLocale === "en" ? "Sponsors" : "Sponsor"}
            </a>
            <a href={currentLocale === "en" ? "/en/contacts" : "/contacts"}>
              {currentLocale === "en" ? "Contacts" : "Contatti"}
            </a>
            {applicationsUrl && (
              <a
                href={applicationsUrl}
                id="apply"
                className="font-primary cursor-pointer rounded-lg bg-white px-4 py-2 text-base text-black hover:bg-gray-300"
              >
                {currentLocale === "it" ? "Candidati ora!" : "Apply now!"}
              </a>
            )}
          </div>
          <div className="font-primary flex justify-end gap-8 text-end text-white uppercase">
            <a href={`/en${pathnameWithoutLocale}`}>En</a>
            <a href={`/${pathnameWithoutLocale}`}>It</a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
