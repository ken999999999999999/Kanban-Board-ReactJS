import { Card } from "antd"
import { useContext } from "react"
import { DragSourceMonitor, useDrag } from "react-dnd"
import StatusTag from "./StatusTag"
import {
  ITask,
  ITasksContext,
  ItemTypes,
  Status,
  TasksContext,
} from "./TaskType"

interface ITaskCard {
  task: ITask
}

interface IDropResult {
  status: Status
}

export default ({ task }: ITaskCard): JSX.Element => {
  const { move } = useContext<ITasksContext>(TasksContext)

  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: task,
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult() as IDropResult
        if (item && dropResult) {
          if (dropResult.status !== task.status) move(item, dropResult.status)
        }
      },
      collect: (monitor: DragSourceMonitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [task]
  )
  return (
    <div ref={drag} style={{ cursor: "move", opacity }}>
      <Card
        title={task.title}
        extra={<StatusTag status={task.status} />}
        hoverable
      >
        {task.description}
      </Card>
    </div>
  )
}
