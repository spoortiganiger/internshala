import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h2>Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              <strong>Status:</strong> {task.status}
            </p>

            <p>
              <strong>Priority:</strong> {task.priority}
            </p>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;