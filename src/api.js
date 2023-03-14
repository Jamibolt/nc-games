function getReviews() {
  return fetch("https://jamies-backend-project.onrender.com/api/reviews").then(
    (response) => response.json()
  );
}

export default getReviews;
