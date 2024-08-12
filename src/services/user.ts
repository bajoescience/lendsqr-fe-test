import axios from "axios"
import { TUserObj } from "../types"

const baseUrl = 'http://localhost:3001/users'

const getUser = async (id:string) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const getUsers = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createUser = async (userObj: TUserObj)  => {
  const res = await axios.post(baseUrl, userObj)
  return res.data
}

const updateUser = async (
  id: string, 
  resource: TUserObj
) => {
  return await axios.put(`${baseUrl}/${id}`, resource)
} 

const clearUsers = async () => {
  const res = await axios.delete(baseUrl)
  return res.data
}

export {getUser, getUsers, createUser, clearUsers, updateUser}