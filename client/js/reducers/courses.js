import { createReducer } from '../utils';
// Constants
const GET_COURSES = "GET_COURSES";
const LOADING_COURSES = "LOADING_COURSES";
const SET_CURRENT_COURSE = "SET_CURRENT_COURSE";
// Reducers
const initialState = {
  courses: [],
  isLoaded: false,
  currentCourse: {},
  total: 0
};

export default createReducer(initialState, {
  [LOADING_COURSES]: () => ({
    isLoaded: false
  }),
  [GET_COURSES]: (state, { data }) => ({
    courses: data,
    isLoaded: true,
    total: data.length
  }),
  [SET_CURRENT_COURSE]: (state, { data }) => ({
    currentCourse: data
  })
});

// Actions
export function takingCourses() {
  return {
    type: LOADING_COURSES
  }
}

export function getCourses(courses) {
  return {
    type: GET_COURSES,
    payload: { data: courses }
  }
}

export function setCurrentCourse(course) {
  return {
    type: SET_CURRENT_COURSE,
    payload: { data: course }
  }
}
// AJAX requests
export function fetchCourses() {
  return dispatch => {
    dispatch(takingCourses());
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/courses',
      success: function(json) {
        dispatch(getCourses(json));
      },
      error: function(e) {
        alert(e.message);
      }
    });
  }
}
