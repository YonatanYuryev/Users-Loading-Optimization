import axios, { AxiosResponse } from "axios";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse> {
    return await axios.get('');
  }
}