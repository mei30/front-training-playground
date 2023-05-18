import { User, UserProbs } from "../models/User";
import { View } from "./View";

export class UserForm extends View<UserProbs, User> {

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save": this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name: name });
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
      <input placeholder="${this.model.get("name")}" />
      <button class="set-age">Set Random Age</button>
      <button class="set-name">Set Name</button>
      <button class="save">Save</button>
      </div>
    `;
  }

}
