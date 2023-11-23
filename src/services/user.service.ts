import { UserApi } from "../api";
import { User } from "../models";

export class UserService {
  constructor(private userApi = new UserApi()) {}

  async fetchRandomUser(): Promise<User> {
    return this.userApi.getRandomUser();
  }
}
