import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./Task.css";
import { Draggable } from 'react-beautiful-dnd';
import { Tag } from 'antd';
import { ClockCircleFilled, CloseCircleFilled, SoundFilled } from '@ant-design/icons';
import FormTask from "../FormTask/index";

function Task(props) {
    const { task, index, columnId, deleteTask, updateTask } = props;
    const [visible, setVisible] = useState(false);
    const getDeadLine = (deadline) =>{
        const  Now= new Date();
        const  Deadline = new Date(deadline);
        if(Deadline>Now){
            Deadline.setFullYear( Deadline.getFullYear() - Now.getFullYear());
            Deadline.setMonth( Deadline.getMonth() - Now.getMonth());
            Deadline.setDate( Deadline.getDate() - Now.getDate());
            if(Deadline.getDate()<=3 && Deadline.getMonth()===0 && Deadline.getFullYear()===0){
                return <Tag color="#f50" className="task-tag"><SoundFilled /> {Deadline.getDate()} day(s) left</Tag>
            }
        }
        else if
        (
            Deadline.getDate()===Now.getDate()&&
            Deadline.getMonth()===Now.getMonth()&&
            Deadline.getFullYear()===Now.getFullYear()
        )
        {
            return <Tag color="#f50" className="task-tag"><ClockCircleFilled /> DeadLine Today</Tag>
        }
        else
        {
            return <Tag color="#f50" className="task-tag"><ClockCircleFilled /> Late ({Deadline.getDate()}-{Deadline.getMonth()+1}-{Deadline.getFullYear()})</Tag>
        }

    }
    const onCloseFrom=()=>{
        setVisible(false);
    }
    const handleDeleteButtonClick = (taskId,columnId)=>{
        deleteTask(taskId,columnId);
    }
    const handleOnClickTaskContent = (taskIdShow)=>{
        setVisible(true);
    }
    return (
        <>
            <Draggable draggableId={ task.id} index={ index }>
                
                {(provided)=>(
                    <div className="task-container"
                        ref={provided.innerRef}                    
                        {...provided.draggableProps}
                        style={{    
                            ...provided.draggableProps.style
                        }}
                    >
                        <div className="task-header"
                            {...provided.dragHandleProps}
                            style={{
                                backgroundColor:  task.priority
                            }}
                        >
                            <div className="task-title">{ task.title}</div>
                            <div className="task-delete" onClick={()=>{ handleDeleteButtonClick(task.id,columnId) }}><CloseCircleFilled /></div>
                        </div>
                        <div className="task-content-wrap">
                            <div className="task-content" 
                                onClick={()=>{handleOnClickTaskContent(task.id)}}
                            >
                                { getDeadLine(task.deadline) }
                                <div className="description">
                                <pre>
                                    {
                                        task.description
                                    }
                                </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
            <FormTask onCloseFrom={ onCloseFrom } visible={ visible } task={ task } updateTask ={ updateTask }/>
        </>
    )
}

Task.propTypes = {
    task:PropTypes.object.isRequired,
    index: PropTypes.number,
}

Task.defaultProps = {
    task:null,
    index: 0,
}
export default Task

