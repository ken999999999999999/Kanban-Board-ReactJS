import { Col, Row } from "antd"
import { useCallback, useState } from "react"
import { initialTasks } from "./initialTasks"
import TaskList from "./TaskList"
import { ITask, ITaskStore, Status, TasksContext } from "./TaskType"

export default (): JSX.Element => {
  const [tasks, setTasks] = useState(initialTasks)

  const moveTask = useCallback(
    (task: ITask, status: Status) => {
      setTasks((preTasks: ITaskStore) => ({
        ...preTasks,
        [task.status]: preTasks[task.status].filter(
          (item) => item.id !== task.id
        ),
        [status]: [{ ...task, status }, ...preTasks[status]],
      }))
    },
    [tasks]
  )

  return (
    <TasksContext.Provider
      value={{
        tasks,
        move: moveTask,
      }}
    >
      <Row gutter={[12, 12]} justify="space-between">
        {Object.values(Status).map((status) => (
          <Col
            key={status}
            span={24 / Object.values(Status).length}
            style={{ borderRightStyle: "dotted", borderLeftStyle: "dotted" }}
          >
            <TaskList tasks={tasks[status]} status={status} />
          </Col>
        ))}
      </Row>
    </TasksContext.Provider>
  )
}
