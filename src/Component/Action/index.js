export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: json });
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await response.json();
    dispatch({
      type: "GET_SINGLE_PRODUCTS",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const json = await response.json();
    dispatch({
      type: "GET_ALL_CATEGORY",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Categories = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const json = await response.json();
    dispatch({
      type: "GET_ALL_CATEGORY",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productCategories = (category) => async (dispatch) => {
  try {
    const url =
      category.length === 0
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch({
      type: "GET_PROD_CATEGORY",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};
