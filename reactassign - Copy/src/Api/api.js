import axios from 'axios';

const REGISTRATION = " http://localhost:3005/users"

const PROJECT = "http://localhost:3005/projects"

const TASK = "http://localhost:3005/mydt"

export const registrationApi = async(userData)=> await axios.post(REGISTRATION,userData);

export const getRegistrationApi = async()=> await axios.get(REGISTRATION);

export const postProjectApi = async(project)=> await axios.post(PROJECT,project);

export const postTaskApi = async(task)=> await axios.post(TASK,task);

export const getProjectApi = async()=> await axios.get(PROJECT);

export const getTaskApi = async()=> await axios.get(TASK);