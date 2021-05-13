import * as api from "../api";

//Action Creators
export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles();
    dispatch({ type: "FETCH", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
