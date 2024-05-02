import api from "@/lib/api"
import { AdminLoginData, AdminSignupData } from "@/utils/types"

export const ADMIN_SIGNUP = async (data: AdminSignupData) => {
  const res = await api.post("", data)

  if (res.status === 201) {
    return res.data
  } else {
    throw new Error(res.data.message)
  }
}

export const ADMIN_LOGIN = async (data: AdminLoginData) => {
  const res = await api.post("", data)

  if (res.status === 200) {
    return res.data
  } else {
    throw new Error(res.data.message)
  }
}