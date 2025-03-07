"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Drawer() {
	return (
		<Sheet>
			<SheetTrigger asChild className="md:hidden">
				<MenuIcon color="white" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col justify-between h-full px-4 py-16">
					<div className="flex flex-col items-end text-end text-white font-primary gap-8">
						<a href="/garage/">Garage</a>
						<a href="/team/">Team</a>
						<a href="/sponsors/">Sponsors</a>
						<a href="/contacts/">Contacts</a>
					</div>
					<div className="flex justify-end text-end text-white font-primary gap-8 uppercase">
						<a href="#">En</a>
						<a href="#">It</a>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
