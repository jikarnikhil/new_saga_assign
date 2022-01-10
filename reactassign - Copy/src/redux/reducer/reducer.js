import * as types from "../action/actionTypes";

const registrationState = {
    users: [],
    loading: false,
    error: null,
  };

  const projectState = {
    project: [],
    loading: false,
    error: null,
  };

  const taskState = {
    task: [],
    loading: false,
    error: null,
  };

// Registration Reducer -------------------------------------------->

export const registrationReducer = (state = registrationState, action) => {
    switch (action.type) {
        case types.REGISTRATION:
        case types.GET_REGISTRATION_DATA:
        return {
          ...state,
          loading: true,
        };
        case types.REGISTRATION_SUCCESS:
            return {
          ...state,
          loading: false,
          users: action.payload,
        };
        case types.GET_REGISTRATION_DATA_SUCCESS:
            return {
        ...state,
        loading: false,
        users: action.payload,
      };
        case types.REGISTRATION_ERROR:
        case types.GET_REGISTRATION_DATA_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


// project Reducer -------------------------------------------------------->

export const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case types.POST_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case types.POST_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload,
      };
    case types.POST_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


// Task Reducer -------------------------------------------------------->

export const taskReducer = (state = taskState, action) => {
  switch (action.type) {
    case types.POST_TASK:
      return {
        ...state,
        loading: true,
      };
    case types.POST_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload,
      };
    case types.POST_TASK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};