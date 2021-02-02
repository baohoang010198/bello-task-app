import './App.css';
import TaskApp from './component/TaskApp';
import { v4 as uuidv4 } from 'uuid';
import { Layout } from 'antd';
import BtnAddTask from './component/btnAddTask';
import initialData from './initial-data';
import { useState } from 'react';
function App() {
  const { Header, Content } = Layout;
  const [state, setState] = useState(initialData);
  const addTask = ( values ) =>{
    console.log(values);
      const newTask = {
        id:uuidv4(),
        ...values,
      }
      const Tasks =state.tasks;
      const newTasks = {
        [newTask.id]:newTask,
          ...Tasks,
          
      }
      const columnFristId = state.columnOrder[0];
      const columnFrist = state.columns[columnFristId];
      const newColumns = {
          [columnFristId]:columnFrist.taskIds.push(newTask.id),
          ...state.columns,
      }

      const newState = {
        ...state,
        tasks:newTasks,
        columns:newColumns,
      };
      setState(newState);
  }
  const deleteTask = (taskIdDelete,columnId)=>{
    let newState = state;
    delete newState.tasks[taskIdDelete];
    const newTaskIds = state.columns[columnId].taskIds.filter(taskId=>taskId!==taskIdDelete);
    const newColumns = {
      ...state.columns,
      [columnId]:{
        ...state.columns[columnId],
        taskIds:newTaskIds,
      },
    }
    newState = {
      ...newState,
      columns:newColumns,
    }
    setState(newState);
  }
  const updateTask = (taskUpdate)=>{
      const stateUpdate = {
        ...state,
        tasks:{
          ...state.tasks,
          [taskUpdate.id]:taskUpdate,
        },
      }
      setState(stateUpdate);
  }
  const onHandleDragEnd = (result)=>{
      const { destination, source, draggableId } = result;
      if(!destination){
        return;
      }

      if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];

      if(start===finish){
        const newTaskIds =Array.from( start.taskIds);
        newTaskIds.splice(source.index,1);
        newTaskIds.splice(destination.index,0,draggableId);

        const newColumn = {
          ...start,
          taskIds:newTaskIds,
        };
        const newState = {
          ...state,
          columns:{
            ...state.columns,
            [newColumn.id]:newColumn,
          }
        };
        setState(newState);
      }
      else{
      //moving from one list to another
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index,1);
      const newStart={
        ...start,
        taskIds:startTaskIds,
      }

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(source.index,0,draggableId);
      const newFinish={
        ...finish,
        taskIds:finishTaskIds,
      }
      const newState = {
        ...state,
        columns:{
          ...state.columns,
          [newStart.id]:newStart,
          [newFinish.id]:newFinish,
        }
      };
      setState(newState);
    }
  }
  return (
    <Layout>
      <Header className="header">
       <div className="logo">
          <h1>Bello Task</h1>
       </div>
        <div className="setting">
            <BtnAddTask addTask={ addTask }/>
        </div>
        </Header>
      <Content className="content">
          <TaskApp state={ state } onHandleDragEnd={ onHandleDragEnd } deleteTask={ deleteTask } updateTask={ updateTask }/>
      </Content>
  </Layout>


  );
}

export default App;
