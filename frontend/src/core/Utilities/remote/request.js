import axios from "axios"
import { getLocalUser, removeLocalUser } from "../local/user"

axios.defaults.baseURL = "http://localhost:3000"

export const sendRequest = async (method, route, body) => {
  const token = getLocalUser() ?? ""

  try {
    const response = await axios.request({
      method,
      url: route,
      data: body,
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    return response

  } catch (error) {
    if (error.response && error.response.status === 401) {
      removeLocalUser()
      window.location.replace("/");
    } else {
      toast.error("Something Went Wrong")
      console.error(error)
    }
  }
}

