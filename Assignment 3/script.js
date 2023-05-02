import { key } from "./key.js";

document.getElementById("getbutton").addEventListener("click", getmovie);

function getmovie() {
  let movieId = parseInt(document.getElementById("list").value);

  let search = axios.get("https://api.themoviedb.org/3/movie/" + movieId, {
    params: {
      api_key: key,
      append_to_response: "videos",
    },
  });

  let Result = search.then((movieData) => {
    document.getElementById("poster").src =
      "https://image.tmdb.org/t/p/w500" + movieData.data.poster_path;

    document.getElementById("title").innerHTML = movieData.data.original_title;
    document.getElementById("tagline").innerHTML = movieData.data.tagline;
    document.getElementById(
      "status"
    ).innerHTML = `${movieData.data.status}: ${movieData.data.release_date}`;
    document.getElementById(
      "language"
    ).innerHTML = `Languages: ${movieData.data.language}`;
    document.getElementById(
      "runtime"
    ).innerHTML = `Run-time: ${movieData.data.runtime} minutes`;
    document.getElementById(
      "popularity"
    ).innerHTML = `Popularity: ${movieData.data.popularity}`;
    document.getElementById(
      "voteAverage"
    ).innerHTML = `Vote Average: ${movieData.data.vote_average}`;
    document.getElementById(
      "voteCount"
    ).innerHTML = `Vote Count: ${movieData.data.vote_count}`;
    document.getElementById(
      "budget"
    ).innerHTML = `Budget: $${movieData.data.budget}`;
    document.getElementById("overview").innerHTML = movieData.data.overview;
    document.getElementById("trailer").src =
      "https://www.youtube.com/embed/" +
      movieData.data.videos.results
        .filter((trailer) => trailer.type === "Trailer")
        .at(0).key;
  });
}
