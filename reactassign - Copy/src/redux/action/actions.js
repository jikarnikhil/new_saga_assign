import  * as types from './actionTypes';

//  Registration actions -------------------------->

export const registration = (userInfo)=> ({
    type:types.REGISTRATION,
    payload: userInfo
})

export const registrationSuccess = ()=>({
    type:types.REGISTRATION_SUCCESS,

})

export const registrationError = (error)=>({
    type:types.REGISTRATION_ERROR,
    payload:error
})

// Get Registration Data --------------------------->

export const getRegistrationData = ()=>({
    type:types.GET_REGISTRATION_DATA,
})


export const getRegistrationDataSuccess = (userData)=>({
    type:types.GET_REGISTRATION_DATA_SUCCESS,
    payload:userData
})


export const getRegistrationDataError = (error)=>({
    type:types.GET_REGISTRATION_DATA_ERROR,
    payload:error
})


// Add Projects Action ----------------------------->

export const postProject = (data)=>({
    type:types.POST_PROJECT,
    payload:data
})

export const postProjectSuccess = ()=>({
    type:types.POST_PROJECT_SUCCESS,
})

export const postProjectError = (error)=>({
    type:types.POST_PROJECT_ERROR,
    payload:error
})


// Add Task Action ----------------------------->

export const postTask = (data)=>({
    type:types.POST_TASK,
    payload:data
})

export const postTaskSuccess = ()=>({
    type:types.POST_TASK_SUCCESS,
})

export const postTaskError = (error)=>({
    type:types.POST_TASK_ERROR,
    payload:error
})