import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://jamies-backend-project.onrender.com/api",
});

export const getReviews = () => {
  let path = `/reviews`;
  return reviewsApi.get(path).then(({ data }) => {
    return data;
  });
};

export const getReviewById = (review_id) => {
  let path = `/reviews/${review_id}`;
  return reviewsApi.get(path).then(({ data }) => {
    return data;
  });
};

export const getCommentsByReview = (review_id) => {
  let path = `/reviews/${review_id}/comments`;
  return reviewsApi.get(path).then(({ data }) => {
    return data;
  });
};

export const voteForReview = (review_id, votes) => {
  let path = `/reviews/${review_id}`;
  return reviewsApi
    .patch(path, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};
