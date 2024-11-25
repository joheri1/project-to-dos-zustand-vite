import { create } from "zustand";
import data from "../data/data.json";

export const useStore = create((set) => ({
  // Import JSON data as the initial state
  title: data.title,
  description: data.description,
  taskTitle: data.taskTitle,
  tasks: data.tasks,

  // Add a new task
  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { text, id: crypto.randomUUID(), completed: false },
      ],
    })),

  // Toggle task completion
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

  // Remove a task
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useStore;
