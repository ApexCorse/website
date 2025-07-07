export type Department =
  | "board"
  | "advisors"
  | "chassis"
  | "aerodynamics"
  | "powertrain"
  | "electronics"
  | "it"
  | "graphics"
  | "business"
  | "cost";

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
