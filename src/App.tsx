import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	setToken, resetToken, register, login
} from './store/auth';
import type {RootState} from './store/store';
// import {getToken} from './store/auth'

const App: React.FC = () => {
	const dispatch = useDispatch();
	const {token} = useSelector((state: RootState) => state.auth);

	const set = () => {
		dispatch(setToken('test'));
	};

	const reset = () => {
		dispatch(resetToken());
	};

	useEffect(() => {
		const fetchToken = async () => {
			const me = {
				email: 'owtmpatrick@gmail.com',
				password: 'testpassword1419'
			};

			const res = await dispatch(login(me));

			// console.log('response:', res);
		};

		fetchToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="App">{token || 'no token'}</div>

			<button type="button" onClick={set}>
				set token
			</button>

			<button type="button" onClick={reset}>
				reset token
			</button>
		</>
	);
};

export default App;
