import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "8tZIilCOGJvFUBpO6WQeS4Y9ahGEla2m";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Reviews:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
