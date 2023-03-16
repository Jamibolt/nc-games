import Header from "../src/components/Header";
import ReviewList from "../src/components/ReviewList";
import SingleReview from "../src/components/SingleReview";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/reviews/:review_id/comments" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
