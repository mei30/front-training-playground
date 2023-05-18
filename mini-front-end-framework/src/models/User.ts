import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Model } from "./Model";
import { Collection } from "./Collection";

export class UserProbs {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProbs> {
  static buildUser(attrs: UserProbs): User {
    return new User(
      new Attributes<UserProbs>(attrs),
      new Eventing(),
      new ApiSync<UserProbs>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProbs> {
    return new Collection<User, UserProbs>(rootUrl, (json: UserProbs) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const randomAge = Math.round(Math.random() * 100);

    this.set({ age: randomAge });
  }
}
