import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
  Query: {
    hello: () => "Hello World",
    projects: async () => await Project.find(),
    project: async (_, { _id }) => await Project.findById(_id),
    task: async (_, { _id }) => await Task.findById(_id),
    tasks: async () => await Task.find(),
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({
        name,
        description,
      });
      const savedProject = await project.save();
      return savedProject;
    },
    createTask: async (_, { title, projectId }) => {
      const projectFound = await Project.findById(projectId);

      if (!projectFound) throw new Error("Project not found");

      const task = new Task({
        title,
        projectId,
      });
      return await task.save();
    },
    deleteProject: async (_, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete(_id);
      if (!deletedProject) throw new Error("Project not found");
      return deletedProject;
    },
    deleteTask: async(_, { _id }) => {
      const deletedTask = await Task.findByIdAndDelete(_id)
      if(!deletedTask) throw new Error("Task not found")
      return deletedTask
    }
  },
};
