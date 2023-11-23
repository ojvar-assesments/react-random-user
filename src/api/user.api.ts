import { User, Users } from "../models";
import { BaseAPI } from "./base.api";

type Info = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

type RandomUser = {
  results: Users;
  info: Info;
};

export class UserApi extends BaseAPI {
  constructor(private baseUrl: string = "https://randomuser.me/api") {
    super();
  }

  async getRandomUser(): Promise<User> {
    const randomUserData = await this.get<RandomUser>(this.baseUrl);
    return randomUserData.results[0];
  }
}
