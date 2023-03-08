import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  {},
  {

//getAdminStats
    getAdminStatsRequest: state => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.viewsCount = action.payload.viewsCount;
      // state.subscriptionCount = action.payload.subscriptionCount;
      state.usersCount = action.payload.usersCount;
      // state.subscriptionPercentage = action.payload.subscriptionPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.usersPercentage = action.payload.usersPercentage;
      // state.subscriptionProfit = action.payload.subscriptionProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.usersProfit = action.payload.usersProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


    //getAllUser
    getAllUsersRequest: state => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //updateUserRole
    updateUserRoleRequest: state => {
      state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    //deleteUser
    deleteUserRequest: state => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //createCourse
    createCourseRequest: state => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //deleteCourse
    deleteCourseRequest: state => {
        state.loading = true;
      },
      deleteCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      //addLecture
      addLectureRequest: state => {
        state.loading = true;
      },
      addLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      addLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      //deleteLecture
      deleteLectureRequest: state => {
        state.loading = true;
      },
      deleteLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
