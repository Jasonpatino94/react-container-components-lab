import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "8tZIilCOGJvFUBpO6WQeS4Y9ahGEla2m";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: [],
  };

  handleSubmit = (event) => {
    event.preventDefault;

    fetch(URL.concat(this.state.search))
      .then((res) => res.json())
      .then((data) => this.setState({ searchReviews: data.results }));
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Search Review</label>
          <input type="text" onChange={this.handleSearch} />
          <input type="submit" />
        </form>
        {typeof this.state.reviews === "object" &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
