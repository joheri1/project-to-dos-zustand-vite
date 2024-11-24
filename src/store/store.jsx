import { create } from "zustand";
import data from "../data/data.json"

const useStore = create((set) => ({
  tasks: data.tasks,
  // Get task list from JSON

  // Title for the Checklist
  title: "Project Todo app",
  setTitle: (newTitle) => set({ title: newTitle }),

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

