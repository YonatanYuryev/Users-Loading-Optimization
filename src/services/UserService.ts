import axios, { AxiosResponse } from "axios";

export interface Params {
  nat?: string;
  limit: number;
  page: number;
}

export default class UserService {
  static async getUsers({ nat, limit, page }: Params): Promise<AxiosResponse> {
    return await axios.get(`https://randomuser.me/api/?page=${page}&results=${limit}&nat=${nat}`);
  }
}