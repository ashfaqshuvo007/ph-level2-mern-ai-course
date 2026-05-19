export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  is_active: boolean;
  age: number;
  role?: string; //admin, user, agent
}
