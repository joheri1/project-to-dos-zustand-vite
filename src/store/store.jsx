import { create } from "zustand";

const useStore = create((set) => ({
  // Title for the Checklist
  title: "Johanna's Checklist",
  setTitle: (newTitle) => set({ title: newTitle }),

  // Tasks state
  tasks: [], // Initialize with an empty array

  // Function to add a new task
  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now(), text, completed: false }, // Add a new task
      ],
    })),

  // Function to toggle task completion
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

  // Function to remove a task
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id), // Remove task by ID
    })),
}));

export default useStore;

