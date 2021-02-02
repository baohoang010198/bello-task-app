const initialData = {
    tasks:{
        'task-1':{ 
            id:'task-1',
            title:'Play Football',
            description:' Prepare: ball + shoes + clothes',
            priority:'lightgreen',
            deadline: "2021-01-31"
        },
        'task-2':{ 
            id:'task-2',
            title:'Go Shopping',
            description:' Prepare: ball + shoes + clothes',
            priority:'lightpink',
            deadline: "2021-01-31"
        },
        'task-3':{ 
            id:'task-3',
            title:'Go to school',
            description:' Prepare: ball + shoes + clothes',
            priority:'lightgreen',
            deadline: "2021-01-31"
        },
        'task-4':{ 
            id:'task-4',
            title:'Hang out with homie',
            description:' Prepare: ball + shoes + clothes',
            priority:'lightgrey',
            deadline: "2021-01-31"
        },
    },
    columns:{
        'column-1': {
            id: "column-1",
            title:"To do",
            taskIds:['task-1','task-2','task-3','task-4'],
        },
        'column-2': {
            id: "column-2",
            title:"In process",
            taskIds:[],
        },
        'column-3': {
            id: "column-3",
            title:"Test",
            taskIds:[],
        },
        'column-4': {
            id: "column-4",
            title:"Done",
            taskIds:[],
        },
    },
    columnOrder: ['column-1','column-2','column-3','column-4'],
};
export default initialData;