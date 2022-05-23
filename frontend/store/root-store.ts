import { observable } from "mobx";
import { createContext, useContext, Context } from "react";
import { TodoListStore } from "./store";

export class RootStore {
  @observable
  public todo: TodoListStore;
  constructor() {
    this.todo = new TodoListStore();
  }
}

export const RootStoreContext: Context<RootStore> =
  createContext<RootStore | null>(null);

export const useRootStore = (): RootStore => {
  return useContext(RootStoreContext);
};
