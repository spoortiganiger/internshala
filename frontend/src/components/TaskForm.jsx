import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(task);

    setTask({
      title: "",
      description: "",
      priority: "Medium",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <br />
      <br />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />

      <br />
      <br />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br />
      <br />

      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;