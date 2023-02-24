import "./App.css"
import { Layout, Typography } from "antd"
import "antd/dist/reset.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import TaskBoard from "./TaskBoard"

const { Header, Content } = Layout

const App = (): JSX.Element => {
  return (
    <Layout className="layout">
      <Header style={{ padding: "12px 24px" }}>
        <Typography.Title style={{ color: "white" }}>
          Welcome to Kanban Board!
        </Typography.Title>
      </Header>
      <Content style={{ padding: "24px", minHeight: "90vh" }}>
        <DndProvider backend={HTML5Backend}>
          <TaskBoard />
        </DndProvider>
      </Content>
    </Layout>
  )
}

export default App
