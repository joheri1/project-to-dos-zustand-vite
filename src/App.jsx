export const App = () => {
  return (
    <div>
      <h1>
        <i className="fa fa-check"></i> Johannas Checklist
      </h1>
      <form id="todo-list">
        {/* Header */}
        <div className="todo-header">Header Title</div>

        {/* List of tasks */}
        <span className="todo-wrap">
          <input type="checkbox" id="task-1" />
          <label htmlFor="task-1" className="todo">
            <i className="fa fa-check"></i> Example Task 1
          </label>
          <span className="delete-item" title="remove">
            <i className="fa fa-times-circle"></i>
          </span>
        </span>
        <span className="todo-wrap">
          <input type="checkbox" id="task-2" />
          <label htmlFor="task-2" className="todo">
            <i className="fa fa-check"></i> Example Task 2
          </label>
          <span className="delete-item" title="remove">
            <i className="fa fa-times-circle"></i>
          </span>
        </span>

        {/* Input Field */}
        <input
          type="text"
          className="input-todo"
          placeholder="Write a task..."
        />

        {/* Add Task Button */}
        <div id="add-todo">
          <i className="fa fa-plus"></i> Add Task
        </div>
      </form>
    </div>
  );
};
