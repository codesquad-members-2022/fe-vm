import axios from 'axios';

const baseURL = '/api/items';
const client = axios.create({ baseURL });

const itemsApi = {
	getItems: async () => {
		try {
			const response = await client.get('/');
			return response.data;
		} catch (error) {
			return error.response;
		}
	},
};

export default itemsApi;
