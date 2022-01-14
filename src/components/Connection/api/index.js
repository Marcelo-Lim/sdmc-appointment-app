import axios from 'axios';

// const API = axios.create({ baseURL: 'https://sdmc-clinic.herokuapp.com' });
const API = axios.create({ baseURL: 'http://localhost:5000' });
  
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


export const fetchInfos = ()=> API.get('/user');
export const updateInformation =(id, updatedInformation) => API.patch(`/user/${id}`, updatedInformation);

export const addAppointment = (appointment) => API.post('/appointment', appointment);
export const fetchAppointments = () => API.get('/appointment/appointmentsss');
export const cancelAppointment = (id,cancelApps) => API.patch(`/appointment/${id}/cancelAppointment`, cancelApps);
export const updateAppointment = (id,updateApps) => API.patch(`/appointment/${id}/updateAppointment`, updateApps);
