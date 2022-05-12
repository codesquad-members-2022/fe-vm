import axios from 'axios';

const baseURL = '/api/coins';
const client = axios.create({ baseURL });

const coinsApi = {
	getCoins: async () => {
		try {
			const response = await client.get('/');
			return response.data;
		} catch (error) {
			return error.response;
		}
	},
};

export default coinsApi;
