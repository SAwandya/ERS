import { create } from "zustand";

const useEmployeeQueryStore = create((set) => ({
  selectedRow: null,
  SetSelectedRow: (selectedRow) => set({ selectedRow: selectedRow }),
}));

export default useEmployeeQueryStore;
