import axios from "axios";

const baseAPI = axios.create({
  baseURL: `https://nc-games-lh3e.onrender.com/api`,
});

export const getReviews = () => {
  return baseAPI.get("/reviews").then((res) => {
    console.log(res, "this is res api.js");
    return res.data.reviews;
  });
};

export const getCategories = () => {
  return baseAPI.get("/categories").then((res) => {
    return res.data.category;
  });
};
