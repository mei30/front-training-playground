export class Attributes<T extends Object> {
  constructor(private data: T) {}

  get = <Key extends keyof T>(key: Key): T[Key] => {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data
  }
}