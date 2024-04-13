import axios from "axios"
import { SetLocalUser, getLocalUser, removeLocalUser } from "../local/user"

axios.defaults.baseURL = "http://localhost:3000"

export const sendRequest = async (method, route, body) => {
  const token = getLocalUser(token) ?? ""

  try {
    const response = await axios.request({
      method,
      url: route,
      body,
      headers: {
        'Authorization': `bearer ${token}`,
      }
    })
    return response

  } catch (error) {
    if (error.response.status === 401) {
      removeLocalUser()
      window.location.replace("/")
    }
  }
}
