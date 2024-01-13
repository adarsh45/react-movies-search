import axios from "axios";

export async function fetchMoviesData(searchText = "") {
  const searchUrl = `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}`;
  try {
    let { data, status } = await axios.get(searchUrl);
    if (status === 200 && data.Response === "True" && data?.Search) {
      return { success: true, data: data.Search };
    } else throw data;
  } catch (error) {
    console.error(error);
    return { success: false, data: error };
  }
}

export async function fetchMovieDetails(imdbId) {
  let url = `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbId}`;
  try {
    let { data, status } = await axios.get(url);
    if (status === 200 && data.Response === "True") {
      return { success: true, data };
    } else throw data;
  } catch (error) {
    return { success: false, data: error };
  }
}
