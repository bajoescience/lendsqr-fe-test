import axios from "axios"
import { TUserObj } from "../types"

const baseUrl = 'http://localhost:3001/users'

const getUsers = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createUser = async (userObj: TUserObj)  => {
  const res = await axios.post(baseUrl, userObj)
  return res.data
}

const clearUsers = async () => {
  const res = await axios.delete(baseUrl)
  return res.data
}

export {getUsers, createUser, clearUsers}