import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Drawer() {
	return (
		<Sheet>
			<SheetTrigger asChild className="md:hidden">
				<MenuIcon color="white" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col items-end text-end text-white font-primary gap-8 px-4 py-16">
					<a href="/garage/">Garage</a>
					<a href="/team/">Team</a>
					<a href="/sponsors/">Sponsors</a>
					<a href="/contacts/">Contacts</a>
				</div>
			</SheetContent>
		</Sheet>
	);
}
