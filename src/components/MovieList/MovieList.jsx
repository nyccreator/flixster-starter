import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const apiKey = import.meta.env.VITE_API_KEY;
		async function fetchMovies() {
			const response = await fetch(
				`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`
			);
			console.log(response);
			const data = await response.json();
			console.log(data.results);
			setMovies(data.results);
		}

		fetchMovies();
	}, []);

	return (
		<>
			{movies.map((movie, index) => (
				<MovieCard
					title={movie.original_title}
					poster={movie.poster_path}
					rating={movie.vote_average}
					key={index}
				/>
			))}
		</>
	);
};

export default MovieList;
