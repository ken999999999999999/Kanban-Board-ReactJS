import { ITaskStore, Status } from "./TaskType"

export const initialTasks: ITaskStore = {
  [Status.Todo]: [
    {
      id: 1,
      title: "Math Assignment",
      description: "Textbook P.10 - P.12",
      status: Status.Todo,
      started: new Date(),
    },
    {
      id: 2,
      title: "Physical Assignment",
      description: "Textbook P.10 - P.12",
      status: Status.Todo,
      started: new Date(),
    },
    {
      id: 3,
      title: "Study Math Exam",
      description: "Textbook P.5 - P.7",
      status: Status.Todo,
      started: new Date(),
    },
  ],
  [Status.InProgress]: [
    {
      id: 4,
      title: "English Assignment 1",
      description: "Write an essay about weather",
      status: Status.InProgress,
      started: new Date(),
    },
    {
      id: 5,
      title: "English Assignment 2",
      description: "Write an essay about sports",
      status: Status.InProgress,
      started: new Date(),
    },
    {
      id: 6,
      title: "English Assignment 3",
      description: "Textbook p.20",
      status: Status.InProgress,
      started: new Date(),
    },
  ],
  [Status.Completed]: [
    {
      id: 7,
      title: "Art Assignment 1",
      description: "Draw a picture",
      status: Status.Completed,
      started: new Date(),
    },
  ],
}
