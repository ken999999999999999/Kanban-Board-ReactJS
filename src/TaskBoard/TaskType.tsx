import { createContext } from "react"

export type ITaskStore = {
  [key in Status]: ITask[]
}

export interface ITask {
  id: number
  title: string
  description: string
  status: Status
  started: Date
  closed?: Date
}

export enum Status {
  Todo = "To do",
  InProgress = "In Progress",
  Completed = "Completed",
}

export enum ItemTypes {
  BOX = "Box",
}

export interface ITasksContext {
  tasks: ITaskStore
  move: (task: ITask, status: Status) => void
}

export const TasksContext = createContext<ITasksContext>({
  tasks: Object.values(Status).reduce(
    (object, curr) => ({
      ...object,
      [curr]: [],
    }),
    {}
  ) as ITaskStore,
  move: () => {},
})
