import axios from "axios"

const baseUrl = 'http://localhost:3001/users'

const getUsers = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export {getUsers}