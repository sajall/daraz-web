import { handleAPICall } from "../handleApi";
import urls from "./urls";

export const getSingleProductApi = async (id) => {
  const res = await handleAPICall(`${urls.get_one}/${id}`, "GET");
  return res;
};

export const getproductsApi = async () => {
  const response = await handleAPICall(`${urls.products}`, "GET");
  return response;
};

export const addProductApi = async (data) => {
  const body = data;
  const res = await handleAPICall(`${urls.create}`, "POST", body);
  return res;
};

// export const editProductApi = async (id, data) => {
//   const body = data;
//   const res = await handleAPICall(${urls.products}/${id}, "PUT", body);
//   return res;
// };

export const deleteProductApi = async (id) => {
    const idParams = `id=${id}`
  const res = await handleAPICall(`${urls.delete}?${idParams}`, "DELETE");
  return res;
};

export const likeProductApi = async (id) => {
  const res = await handleAPICall(`${urls.like}/${id}`, "PUT");
  return res;
};