export type Department =
  | "board"
  | "advisors"
  | "chassis"
  | "aerodynamics"
  | "powertrain"
  | "electronics"
  | "software"
  | "graphics"
  | "business"
  | "cost"
  | "logistics";

export interface Member {
  name: string;
  description?: string;
  image?: string;
  department: Department;
  leader?: boolean;
  linkedin?: string;
  email?: string;
  course?: string;
  role?: string;
  advisor?: boolean;
}
