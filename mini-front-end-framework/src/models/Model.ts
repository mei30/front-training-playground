import { AxiosPromise, AxiosResponse } from "axios";

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number
}

interface ModelAttributes<T> {
  get<Key extends keyof T>(key: Key): T[Key];
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(userProb: T) {
    this.attributes.set(userProb);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an ID");
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    const data = this.attributes.getAll();

    this.sync
      .save(data)
      .then((response: AxiosResponse) => {
        this.events.trigger("save");
      })
      .catch((reason: any) => {
        this.events.trigger("error");
      });
  }
}
