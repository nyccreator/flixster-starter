import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import "./MovieList.css";

const MovieList = ({ url, page, setPage }) => {
	const apiKey = import.meta.env.VITE_API_KEY;
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovies() {
			const response = await fetch(`${url}&page=${page}&api_key=${apiKey}`);
			const data = await response.json();

			if (page === 1) {
				setMovies(data.results);
			} else {
				setMovies([...movies, ...data.results]);
			}
		}

		fetchMovies();
	}, [url, page]);

	return (
		<div id="movie-container">
			<div id="movie-list">
				{movies.map((movie, index) => (
					<MovieCard
						title={movie.original_title}
						poster={movie.poster_path}
						rating={movie.vote_average}
						key={index}
					/>
				))}
			</div>
			<LoadMoreButton page={page} setPage={setPage} />
		</div>
	);
};

export default MovieList;
