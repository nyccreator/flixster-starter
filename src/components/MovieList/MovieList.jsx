import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Options from "../Options/Options";
import "./MovieList.css";
import Modal from "../Modal/Modal";

const MovieList = ({
	url,
	setUrl,
	prev,
	page,
	setPage,
	watchedList,
	setWatchedList,
	bookmarkedList,
	setBookmarkedList,
}) => {
	const apiKey = import.meta.env.VITE_API_KEY;
	const [movies, setMovies] = useState([]);
	const [genre, setGenre] = useState("");
	const [sort, setSort] = useState("");
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		async function fetchMovies() {
			console.log(
				`${url}&page=${page}&api_key=${apiKey}&with_genres=${genre}&sort_by=${sort}`
			);
			const response = await fetch(
				`${url}&page=${page}&api_key=${apiKey}&with_genres=${genre}&sort_by=${sort}`
			);
			const data = await response.json();

			if (page === 1) {
				setMovies(data.results);
			} else {
				setMovies([...movies, ...data.results]);
			}
		}

		fetchMovies();
	}, [url, page, genre, sort]);

	return (
		<div id="movie-container">
			<Options
				url={url}
				setUrl={setUrl}
				prev={prev}
				setPage={setPage}
				setGenre={setGenre}
				setSort={setSort}
			/>
			<div id="movie-list">
				{movies.map((movie, index) => (
					<MovieCard
						movie={movie}
						title={movie.title}
						poster={movie.poster_path}
						rating={movie.vote_average}
						watchedList={watchedList}
						setWatchedList={setWatchedList}
						bookmarkedList={bookmarkedList}
						setBookmarkedList={setBookmarkedList}
						onClick={() => {
							setSelected(movie);
						}}
						key={index}
					/>
				))}
			</div>
			{selected && (
				<Modal
					show={selected !== null}
					onClose={() => {
						setSelected(null);
					}}
					id={selected.id}
					title={selected.title}
					poster={selected.poster_path}
					rating={selected.vote_average}
					overview={selected.overview}
				/>
			)}
			<LoadMoreButton page={page} setPage={setPage} />
		</div>
	);
};

export default MovieList;
