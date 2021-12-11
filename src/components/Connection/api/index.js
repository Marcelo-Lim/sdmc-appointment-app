import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


export const fetchInfos = ()=> API.get('/user');
export const updateInformation =(id, updatedInformation) => API.patch(`/user/${id}`, updatedInformation);
