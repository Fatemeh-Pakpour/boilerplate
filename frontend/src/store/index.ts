import { useRootStore } from "./root-store";

export const useTodoStore = () => {
  const rootStore = useRootStore();
  return rootStore.todo;
};
