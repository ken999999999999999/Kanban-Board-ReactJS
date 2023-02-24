import { Card, Space, Typography } from "antd"
import { useDrop } from "react-dnd"
import TaskCard from "./TaskCard"
import { ITask, ItemTypes, Status } from "./TaskType"

interface ITaskList {
  tasks: ITask[]
  status: Status
}

export default ({ tasks, status }: ITaskList): JSX.Element => {
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop: () => ({ status }),
    }),
    [status, tasks]
  )
  return (
    <div ref={drop} style={{ minHeight: 1000, padding: "12px" }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Card>
          <Typography.Title level={3}>{status}</Typography.Title>
        </Card>

        {tasks.map((task) => (
          <TaskCard key={`task${task.id + ""}`} task={task} />
        ))}
      </Space>
    </div>
  )
}
