import { Tag } from "antd"
import { Status } from "./TaskType"

interface IStatusTag {
  status: Status
}

const statusColor = {
  [Status.Todo]: "blue",
  [Status.InProgress]: "gold",
  [Status.Completed]: "green",
}

export default ({ status }: IStatusTag): JSX.Element => {
  return <Tag color={statusColor[status]}>{status}</Tag>
}
