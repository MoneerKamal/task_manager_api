const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

//app.get("/api/v1/tasks", (req, rea) => {}); //get all tasks
//app.post("/api/v1/tasks", (req, rea) => {}); //create new task
//app.get("/api/v1/tasks/:id", (req, rea) => {}); //get single task
//app.patch("/api/v1/tasks/:id", (req, rea) => {}); //update a task
//app.delete("/api/v1/tasks/:id", (req, rea) => {}); //delete a task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listenig on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
