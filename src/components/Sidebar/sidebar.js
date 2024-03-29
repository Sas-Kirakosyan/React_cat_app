import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../store/categoriesSlice";

import "./sidebar.scss";

export default function Sidebar() {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories);
  const { categories, isLoading } = categoryState;

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <h3>Categories</h3>
      <div className="categoriesList">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          categories &&
          Array.isArray(categories) &&
          categories.map((cat, i) => (
            <NavLink
              activeClassName="active-link"
              className="navlink"
              key={cat.id}
              to={`/category/${cat.id}`}
            >
              {cat.name.toUpperCase()}
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
}
