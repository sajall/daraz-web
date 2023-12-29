import { baseUrl } from "../handleApi";

export const urls = {
  products: `${baseUrl}/products`,
  get_one: `${baseUrl}/find-product`,
  create: `${baseUrl}/create-product`,
  delete: `${baseUrl}/delete-product`,
  like: `${baseUrl}/like-product`,
};

export default urls;

