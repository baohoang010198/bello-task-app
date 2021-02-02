import { DragDropContext } from 'react-beautiful-dnd';
import Colum from '../Column';
import { Col, Row } from 'antd';

function TaskApp(props) {
    const { state , onHandleDragEnd, deleteTask, updateTask } = props;
    const onDragEnd = result => {
        onHandleDragEnd(result);
    };
    return (
        <div>
            <DragDropContext
            onDragEnd={ onDragEnd }
            >
                <Row
                    justify="space-around"
                >
                        {
                        state.columnOrder.map(columnId=>{
                            const column = state.columns[columnId];
                            const tasks = column.taskIds.map(taskId=>state.tasks[taskId]);
                            return (
                                    <Col
                                        xs={24} sm={12} md={12} lg={6} xl={6}
                                        key={ column.id }
                                    >
                                        <Colum key={ column.id } column={ column } tasks={ tasks } deleteTask={ deleteTask } updateTask={ updateTask }/>
                                    </Col>
                            )
                        })
                        }
                    
                </Row>

            </DragDropContext>
        </div>
    )
}
export default TaskApp

