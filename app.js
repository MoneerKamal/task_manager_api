const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware

app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("task manager app");
});

//app.get("/api/v1/tasks", (req, rea) => {}); //get all tasks
//app.post("/api/v1/tasks", (req, rea) => {}); //create new task
//app.get("/api/v1/tasks/:id", (req, rea) => {}); //get single task
//app.patch("/api/v1/tasks/:id", (req, rea) => {}); //update a task
//app.delete("/api/v1/tasks/:id", (req, rea) => {}); //delete a task

const port = 3000;

app.listen(port, console.log(`Server is listenig on port ${port}...`));
