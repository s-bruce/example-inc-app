import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from '../features/manage-users/usersSlice';

const rootReducer = combineReducers({
    users: usersReducer,
    // add more reducers here
});

export default rootReducer;
