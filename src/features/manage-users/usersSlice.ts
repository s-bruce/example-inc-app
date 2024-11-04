import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../store/config';
import { User } from '../../types/api';

interface UsersState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
});

export const addUser = createAsyncThunk(
    'users/addUser',
    async (newUser: Omit<User, 'id'>) => {
        const response = await axios.post(`${API_URL}/users`, newUser);
        return response.data;
    }
);

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (updatedUser: User) => {
        const { id, ...data } = updatedUser;
        const response = await axios.put(`${API_URL}/users/${id}`, data);
        return response.data;
    }
);

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (userId: number) => {
        await axios.delete(`${API_URL}/users/${userId}`);
        return userId;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<User[]>) => {
                    state.loading = false;
                    state.users = action.payload;
                }
            )
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            })
            .addCase(
                addUser.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.users.push(action.payload);
                    state.error = null;
                }
            )
            .addCase(addUser.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to add user';
            })
            .addCase(
                updateUser.fulfilled,
                (state, action: PayloadAction<User>) => {
                    const index = state.users.findIndex(
                        (user) => user.id === action.payload.id
                    );
                    if (index !== -1) {
                        state.users[index] = action.payload;
                    }
                    state.error = null;
                }
            )
            .addCase(updateUser.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to update user';
            })
            .addCase(
                deleteUser.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.users = state.users.filter(
                        (user) => user.id !== action.payload
                    );
                    state.error = null;
                }
            )
            .addCase(deleteUser.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to delete user';
            });
    },
});

export default usersSlice.reducer;
