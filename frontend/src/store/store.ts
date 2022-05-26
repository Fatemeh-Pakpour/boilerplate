// export class School {
//   public static khar = "S!";
//   public name = "fafa";
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// export abstract class Base {
//   protected abstract getName(): string;

//   public printName() {
//     console.log("Hello, " + this.getName());
//   }
// }

// // const b = new Base();
// export class Derived extends Base {
//   public getName() {
//     return "world";
//   }
// }

// const d = new Derived();
// d.printName();

// export const someClass = class {
//   public content: string;
//   constructor(value: string) {
//     this.content = value;
//   }
// };

// const m = new someClass("Hello, world");
// // <reference path="..." />

// interface Checkable {
//   check(name: string): boolean;
// }

// class NameChecker implements Checkable {
//   public check(s: string) {
//     // Notice no error here
//     return s.toLowerCase() === "ok";
//   }
//   public khar() {
//     console.log("khar");
//   }
// }

// class Base {
//   public greet() {
//     return "Hello, world!";
//   }
// }

// export class Derived2 extends Base {
//   public greet(name?: string) {
//     if (name === undefined) {
//       return super.greet();
//     }
//     return `Hello, ${name?.toUpperCase()}`;
//   }
// }
import { makeObservable, observable, action } from "mobx";
interface Todo {
  task: string;
  isDone: boolean;
  id: string;
}

export class TodoListStore {
  @observable
  public list: Todo[] = [];

  constructor() {
    makeObservable(this);
  }
  @action
  public add = (title: string) => {
    this.list = [
      ...(this.list || []),
      { task: title, id: "khar", isDone: false },
    ];
  };

  @action
  public toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
  }

  @action
  public remove(todo: Todo) {
    this.list = this.list?.filter((l) => l.id !== todo?.id);
  }
}
