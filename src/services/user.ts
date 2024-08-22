import axios from "axios";
import { TPaginateObj, TUserObj } from "../types";

const prod = false;
const baseUrl = prod ? "/api/users" : "http://localhost:3001/api/users";

const getUserCount = async (filterOpts?: Partial<TUserObj>) => {
  const res = await axios.get(`${baseUrl}/count`, {
    params: {
      filter: filterOpts,
    },
  });
  return res.data;
};

const getUser = async (id: string) => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res.data;
};

// page?: number, diff?: number, resource?: TUserObj

const getUsers = async (
  paginateObj?: Partial<TPaginateObj>,
  resource?: Partial<TUserObj>
) => {
  const res = await axios.get(baseUrl, {
    params: {
      filter: resource,
      page: paginateObj?.page,
      diff: paginateObj?.diff,
    },
  });
  return res.data;
};

const createUser = async (userObj: TUserObj) => {
  const res = await axios.post(baseUrl, userObj);
  return res.data;
};

const updateUser = async (id: string, resource: Partial<TUserObj>) => {
  const res = await axios.put(`${baseUrl}/${id}`, resource);

  return res.data;
};

const clearUsers = async () => {
  const res = await axios.delete(baseUrl);
  return res.data;
};

export { getUser, getUsers, createUser, clearUsers, updateUser, getUserCount };
