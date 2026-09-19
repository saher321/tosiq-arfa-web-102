const BASE_URL = "http://127.0.0.1:8000"

export const REG_USER_API = BASE_URL + "/auth/register/"
export const LGN_USER_API = BASE_URL + "/auth/login/"
export const FP_USER_API = BASE_URL + "/auth/forgot-password/"
export const RP_USER_API = BASE_URL + "/auth/reset-password/"

export const CUSTOMERS_API = BASE_URL + "/customers/"
export const ADD_CUSTOMER_API = BASE_URL + "/customers/add/"
export const DEL_CUSTOMER_API = BASE_URL + "/customers/delete"
export const EDT_CUSTOMER_API = BASE_URL + "/customers/edit"
export const UDT_CUSTOMER_API = BASE_URL + "/customers/update/"

export const PROJECTS_API = BASE_URL + "/projects/"
export const ADD_PROJECT_API = BASE_URL + "/projects/add/"
export const DEL_PROJECT_API = BASE_URL + "/projects/delete"
export const EDT_PROJECT_API = BASE_URL + "/projects/edit"
export const UDT_PROJECT_API = BASE_URL + "/projects/update/"