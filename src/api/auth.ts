import axios from 'axios';

const auth = {
	register: async (email: string, password: string, name: string | undefined) => {
		const response = axios.post('/api/register', {
			email,
			password,
			name
		});

		console.log(response);

		return response;
	},
	login: async (email: string, password: string) => {
		const {data} = await axios.post('/api/login', {
			email,
			password
		});

		return data;
	}
};

export default auth;
