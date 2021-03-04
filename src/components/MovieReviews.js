// Code MovieReviews Here
import React from "react";

const Review = ({ display_title, headline, byline, summary_short }) => {
  return (
    <div className="review">
      <header>
        <p>{headline}</p>
      </header>
      <p>{display_title}</p>
      <p>{byline}</p>
      <p>{summary_short}</p> <br></br>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list"> {reviews.map(Review)}</div>;
};

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;
