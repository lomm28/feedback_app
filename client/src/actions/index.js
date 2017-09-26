import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	
	dispatch({ type: FETCH_USER, payload: res.data });
};

//action creator for sending Stripe api token to express server;
export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);

	//dispatching action;
	dispatch({ type: FETCH_USER, payload: res.data });
};