import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, text: "ToDo:", isHeader: true  },
    { id: 2, text: "Plan idea execution", completed: false },
    { id: 3, text: "Execute idea", completed: false },
    { id: 4, text: "Celebrate with a cold one", completed: false },
  ],
  addTask: (taskText) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: taskText, completed: false }],
    })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  markAllCompleted: () =>
    set((state) => ({
      tasks: state.tasks.map((task) => ({ ...task, completed: true })),
    })),
}));

export default useTaskStore;