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

export const getReviewId = async (review_id) => {
  const res = await baseAPI.get(`/reviews/${review_id}`);
  return res.data.review;
};

export const getReviewIdcomments = async (review_id) => {
  const res = await baseAPI.get(`/reviews/${review_id}/comments`);
  return res.data.comments;
};

export const getCategories = async () => {
  const res = await baseAPI.get("/categories");
  return res.data.category;
};

export const patchVotes = async (review_id) => {
  const res = await baseAPI.patch(`/reviews/${review_id}`, { inc_votes: 1 });
  return res.data.review;
};
