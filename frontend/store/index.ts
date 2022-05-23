import { useRootStore } from "./root-store";

export const useConfirmStore = () => {
  const rootStore = useRootStore();
  return rootStore.todo;
};
