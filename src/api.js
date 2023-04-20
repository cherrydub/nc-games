import axios from "axios";

const baseAPI = axios.create({
  baseURL: `https://nc-games-lh3e.onrender.com/api`,
});

// export const getReviews = () => {
//   return baseAPI.get("/reviews").then((res) => {
//     return res.data.reviews;
//   });
// };

export const getReviews = async () => {
  const res = await baseAPI.get("/reviews");
  return res.data.reviews;
};

export const getUsers = async () => {
  const res = await baseAPI.get("/users");
  return res.data.users;
};

export const postComment = async (review_id, username, body) => {
  const res = await baseAPI.post(`/reviews/${review_id}/comments`, {
    username: username,
    body: body,
  });
  return res.data.comment;
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

export const patchVotes = (review_id) => {
  return baseAPI
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data.review;
    });
};
