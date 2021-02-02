import initialData from "../initial-data"

export const Priorities = [
    {
        value:"lightgreen",
        label:"Highest",
    },
    {
        value:"lightpink",
        label:"Medium",
    },
    {
        value:"lightgrey",
        label:"Low",
    },
]
export const columnOrder = initialData.columnOrder
export let Progress = [];
columnOrder.map((column)=>{
    return Progress = [initialData.columns[column] ] ;
})

    
