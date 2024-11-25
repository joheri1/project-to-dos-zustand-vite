import { create } from "zustand";
import data from "../data/data.json";

const useStore = create((set) => ({
  // Data from JSON
  title: data.title,
  description: data.description,
  taskTitle: data.taskTitle,
  tasks: data.tasks,

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

  // Button text handling
  buttonText: "Add Task", // Initial button text
  setButtonText: (newText) => set({ buttonText: newText }), // Function to update button text
}));

export default useStore;

