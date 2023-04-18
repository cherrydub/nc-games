import axios from "axios";

const baseAPI = axios.create({
  baseURL: `https://nc-games-lh3e.onrender.com/api`,
});

export const getReviews = () => {
  return baseAPI.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getReviewId = (review_id) => {
  return baseAPI.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getReviewIdcomments = (review_id) => {
  return baseAPI.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getCategories = () => {
  return baseAPI.get("/categories").then((res) => {
    return res.data.category;
  });
};
