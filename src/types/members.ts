type Department =
	| "board"
	| "chassis"
	| "aerodynamics"
	| "powertrain"
	| "electronics"
	| "it"
	| "graphics"
	| "business";

interface Member {
	name: string;
	description: string;
	image?: string;
	department: Department;
	leader?: boolean;
}