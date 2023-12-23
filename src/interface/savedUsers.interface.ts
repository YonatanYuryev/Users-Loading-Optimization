import { IUser } from "./user.interface";

export interface SavedData {
  [currentPage: number]: IUser[];
}