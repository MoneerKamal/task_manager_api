const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.send("create task");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const getSingleTask = (req, res) => {
  res.send("single task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
};
