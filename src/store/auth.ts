import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import authAPI from '../api/auth';

interface IUser {
	email: string,
	password: string,
	name?: string
}

interface AuthState {
	token: string | null;
	loading: string;
}

export const register = createAsyncThunk('auth.register', async (user: IUser) => {
	const {email, password, name} = user;

	return authAPI.register(email, password, name);
});

export const login = createAsyncThunk('auth.login', async (user: IUser) => {
	const {email, password} = user;

	return authAPI.login(email, password);
});

const initialState: AuthState = {
	token: null,
	loading: 'idle'
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, {payload}: PayloadAction<string>) => {
			state.token = payload;
		},
		resetToken: state => {
			state.token = null;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(register.fulfilled, (state, action) => {
				console.log(action.payload);
				state.token = 'my token';
			})
			.addCase(login.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(login.fulfilled, (state, {payload: {token}}) => {
				console.log(token);
				state.token = token;
			});
	}
});

export const {setToken, resetToken} = authSlice.actions;

export default authSlice.reducer;
