

import { create } from "zustand";

const useStore = create((set) => ({
  title: "Johanna's Checklist", // Default title
  setTitle: (newTitle) => set({ title: newTitle }), // Function to update the title
}));

export default useStore;
