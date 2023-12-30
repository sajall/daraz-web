import { handleAPICall } from "../handleApi";
import urls from "./urls";



export const addUserApi = async (data) => {
  const body = data;
  const res = await handleAPICall(`${urls.create}`, "POST", body);
  return res;
};

export const getUsersApi = async () => {
  const response = await handleAPICall(`${urls.users}`, "GET");
  return response;
};

  export const updateUserApi = async (id, data) => {
    const body = data;
    const res = await handleAPICall(`${urls.update_user}/${id}`, "PUT", body);
    return res;
  };
  
  export const deleteuserApi = async (id) => {
    const res = await handleAPICall(`${urls.delete}/${id}`, "DELETE");
    return res;
  };
  
  export const findUserApi = async (data) => {
    const res = await handleAPICall(`${urls.find_user}`, "PUT" , data);
    return res;
  };