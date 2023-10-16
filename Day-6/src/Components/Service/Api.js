import axios from "axios";

const uri = 'http://localhost:8181'

let jwtToken = localStorage.getItem('token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};


// Authentication 
export const loginUser = (data) => axios.post(`${uri}/api/v1/auth/login`, data) ;

export const registerUser = (data) => axios.post(`${uri}/api/v1/auth/signup`, data) ;

//Customer Profile form
export const getUsers = () => axios.get(`${uri}/api/profile/get`, {headers}) ;

export const getUsersById = (id) => axios.get(`${uri}/api/profile/gets/${id}`, {headers});
//export const getUsersById = (id) => axios.get(`${uri}/api/apply/id=${id}`, headers);

export const updateUsers = (id, data) => axios.put(`${uri}/api/profile/put/${id}`, data, {headers}) ;

export const deleteUsers = (id) => axios.delete(`${uri}/api/profile/delete/${id}`, {headers}) ;

export const addUsers = (data) => axios.post(`${uri}/api/profile/add`, data, {headers}) ;

//Provider Profile form
export const getProviders = () => axios.get(`${uri}/api/apply/provider/get`, {headers}) ;

export const getProviderById = (id) => axios.get(`${uri}/api/apply/provider/gets/${id}`, {headers});
//export const getUsersById = (id) => axios.get(`${uri}/api/apply/id=${id}`, headers);

export const updateProviders = (id, data) => axios.put(`${uri}/api/apply/provider/put/${id}`, data, {headers}) ;

export const deleteProviders = (id) => axios.delete(`${uri}/api/apply/provider/delete/${id}`, {headers}) ;

export const addProviders = (data) => axios.post(`${uri}/api/apply/provider/add`, data, {headers}) ;