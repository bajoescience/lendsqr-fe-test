import axios from "axios";
import { TUserObj } from "../types";

const prod = false;
const baseUrl = prod ? "/api/users" : "http://localhost:3001/users";

const getUser = async (id: string) => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res.data;
};

const getUsers = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createUser = async (userObj: TUserObj) => {
  const res = await axios.post(baseUrl, userObj);
  return res.data;
};

const updateUser = async (id: string, resource: TUserObj) => {
  const res = await axios.put(`${baseUrl}/${id}`, resource);
  return res.data;
};

const clearUsers = async () => {
  const res = await axios.delete(baseUrl);
  return res.data;
};

export { getUser, getUsers, createUser, clearUsers, updateUser };
