import { createSlice } from "@reduxjs/toolkit";
import { fetchImages, getImageByID } from "../api/api";

const initialState = {
  images: [],
  page: 1,
  isLoading: false,
  error: null,
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    getLoading: (state) => {
      state.isLoading = true;
    },
    getSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = false;
      state.images = payload ?? [];
    },
    getError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getLoading, getSuccess, getError } = imagesSlice.actions;

export const getImages = (page = 1, categoryID = "") => {
  return async (dispatch) => {
    dispatch(getLoading());
    try {
      dispatch(getSuccess(await fetchImages(page, categoryID)));
    } catch (error) {
      dispatch(getError(error.toString()));
    }
  };
};

export default imagesSlice.reducer;
