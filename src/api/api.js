import { axiosInstance } from "./config";

export const getAllCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};
//todo all to fech
export const fetchImages = async (page, id) => {
  const response = await axiosInstance.get(
    `/images/search?limit=10&page=${page}&category_ids=${id}`
  );
  return response.data;
};

export const getImageByID = async (imageID) => {
  const response = await axiosInstance.get(`/images/${imageID}`);
  return response.data;
};
