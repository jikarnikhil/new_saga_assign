import * as types from "../action/actionTypes";
import {
    takeLatest,
    put,
    call,
    delay,
    fork,
    all,
    take,
    takeEvery,
  } from "redux-saga/effects";

import {
    registrationApi,
    getRegistrationApi,
    postProjectApi,
    postTaskApi,
} from "./../../Api/api"

import {
    registrationSuccess,
    registrationError,
    getRegistrationDataSuccess,
    getRegistrationDataError,
    postProjectSuccess,
    postProjectError,
    postTaskSuccess,
    postTaskError,
} from "../action/actions"


// Registration watcher ----------------------------------->

function* onRegistrationWatcher({ payload }) {
    try {
      const response = yield call(registrationApi, payload);
      console.log(response);
      if (response.status === 201) {
        yield put(registrationSuccess(response.data));
      }
    } catch (error) {
      yield put(registrationError(error.message));
    }
  }

// Get Registration users ----------------------------------->

function* onGetRegistrationDataWatcher() {
    try {
      const response = yield call(getRegistrationApi);
      if (response.status === 200) {
        yield put(getRegistrationDataSuccess(response.data));
      }
    } catch (error) {
      yield put(getRegistrationDataError(error.message));
    }
  }


// Post project watcher ------------------------------------->

function* onPostProjectWatcher({ payload }) {
  try {
    const response = yield call(postProjectApi, payload);
    console.log(response.data);
    if (response.status === 201) {
      yield put(postProjectSuccess(response.data));
    }
  } catch (error) {
    yield put(postProjectError(error.message));
  }
}


// Post task watcher ------------------------------------->

function* onPostTaskWatcher({ payload }) {
  try {
    const response = yield call(postTaskApi, payload);
    console.log(response.data);
    if (response.status === 201) {
      yield put(postTaskSuccess(response.data));
    }
  } catch (error) {
    yield put(postTaskError(error.message));
  }
}





  //Main Generator Functions=================================>

  // Registration

function* onRegistration() {
    yield takeLatest(types.REGISTRATION, onRegistrationWatcher);
  }


  function* onGetRegistrationData() {
    yield takeLatest(types.GET_REGISTRATION_DATA, onGetRegistrationDataWatcher);
  }


// projects

function* onPostProject() {
  yield takeLatest(types.POST_PROJECT, onPostProjectWatcher);
}


// tasks

function* onPostTask() {
  yield takeLatest(types.POST_TASK, onPostTaskWatcher);
}


  //============================Saga======================>

  const saga = [
    fork(onRegistration),
    fork(onGetRegistrationData),
    fork(onPostProject),
    fork(onPostTask)
  ]


  export default function* rootSaga() {
    yield all([...saga]);
  }