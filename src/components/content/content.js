import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../cart/cart";
import { getImages } from "../../store/imagesSlice";
import { useParams } from "react-router-dom";

const Content = () => {
  const dispatch = useDispatch();
  const imagesState = useSelector((state) => state.images);
  const { images, isLoading, page } = imagesState;
  //TODO if you want add infinite scroll you mast change const page
  // if you want change page you have to keep in state

  const { id } = useParams();

  useEffect(() => {
    dispatch(getImages(page, id));
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //  TODO if not found check images and return NoData componet

  return (
    <div>
      <h2>Images</h2>
      <div className="imagesList">
        {images &&
          Array.isArray(images) &&
          images.map((image) => <Cart key={image.id} image={image} />)}
      </div>
    </div>
  );
};

export default Content;

export function NoData() {
  return <div>no images to show</div>;
}
