"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer md:hidden">
        <MenuIcon color="white" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col justify-between px-4 py-16">
          <div className="font-primary flex flex-col items-end gap-8 text-end text-white">
            <a href="/garage/">Garage</a>
            <a href="/team/">Team</a>
            <a href="/sponsors/">Sponsors</a>
            <a href="/contacts/">Contacts</a>
          </div>
          <div className="font-primary flex justify-end gap-8 text-end text-white uppercase">
            <a href="#">En</a>
            <a href="#">It</a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
