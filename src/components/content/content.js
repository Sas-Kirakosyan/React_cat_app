import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../cart/cart";
import { getImages } from "../../store/imagesSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";

const Content = () => {
  const dispatch = useDispatch();
  const imagesState = useSelector((state) => state.images);
  const { images, isLoading, error } = imagesState;

  const page = 1;
  const { id } = useParams();
  useEffect(() => {
    dispatch(getImages(page, id));
  }, [id]);

  console.log("location", id);
  return (
    <div>
      <h2>Images</h2>
      <div className="imagesList">
        {(isLoading && <div>Loading...</div>) ||
          (images &&
            Array.isArray(images) &&
            images.map((image) => <Cart key={image.id} image={image} />)) || (
            <p>No images found</p>
          )}
      </div>
    </div>
  );
};

export default Content;
