import {ADD,DELETE,DONE,EDIT} from '../Constants/actionTypes'


export const addTask = (payload)=>{
    return {
        type: ADD,payload
    }
}
export const deleteTask = (payload)=>{
    return {
        type: DELETE,payload
    }
}
export const editTask = (payload) =>{
    return{
        type:EDIT,payload
    }
}
export const completeTask = (payload)=>{
    return {
        type: DONE,payload
    }
}