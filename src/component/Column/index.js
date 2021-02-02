import React from 'react'
import PropTypes from 'prop-types'
import Task from '../Task';
import "./Column.css";
import { Droppable } from 'react-beautiful-dnd';
function Colum(props) {
    const { column, tasks, deleteTask, updateTask } = props;
    return (
        <div>
            <div className="column-container">
                <div className="title">
                    <h3 >{ column.title }</h3>
                </div>
                <Droppable
                    droppableId={column.id}
                >
                    {(provided, snapshot)=>(
                        <div className="task-list"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{
                                boxShadow: snapshot.isDraggingOver?"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px":
                                "",
                                backgroundColor:snapshot.isDraggingOver?"#EFE1CE":"white",
                                ...provided.droppableProps.style
                              }}
                        >
                        {
                            tasks.map((task,index)=>(<Task key={ task.id } index ={ index } task={ task } columnId={ column.id } deleteTask={ deleteTask } updateTask={ updateTask }/>))
                        }
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

Colum.propTypes = {
    column:PropTypes.object.isRequired,
    tasks: PropTypes.array,
}

Colum.defaultProps = {
    column:null,
    tasks: [],
}
export default Colum

