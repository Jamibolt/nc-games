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

export const voteForReview = () => {
  let path = `/reviews/${review_id}`;
  return (
    reviewsApi.patch(path),
    {
      votes: 1,
    }.then(({ data }) => {
      return data;
    })
  );
};
