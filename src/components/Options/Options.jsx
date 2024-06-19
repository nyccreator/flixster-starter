import { useState, useEffect } from "react";
import "./Options.css";

function Options({ setSort, setGenre, setPage }) {
	const apiKey = import.meta.env.VITE_API_KEY;
	const [genres, setGenres] = useState([]);
	const sorts = [
		{ api: "title.asc", web: "Title Ascending" },
		{ api: "title.desc", web: "Title Descending" },
		{ api: "popularity.asc", web: "Popularity Ascending" },
		{ api: "popularity.desc", web: "Popularity Descending" },
		{ api: "vote_average.asc", web: "Rating Ascending" },
		{ api: "vote_average.desc", web: "Rating Descending" },
		{ api: "primary_release_date.asc", web: "Release Date Ascending" },
		{ api: "primary_release_date.desc", web: "Release Date Descending" },
	];

	useEffect(() => {
		async function fetchGenres() {
			const response = await fetch(
				`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`
			);
			const data = await response.json();
			setGenres(data.genres);
		}

		fetchGenres();
	});

	const handleGenreSelectChange = (event) => {
		setGenre(event.target.value);
		setPage(1);
	};

	const handleSortSelectChange = (event) => {
		setSort(event.target.value);
		setPage(1);
	};

	// const handleSaveClick = () => {
	// 	console.log("clicked");
	// 	if (genre === "" && sort === "") {
	// 		setUrl(prev);
	// 	} else {
	// 		setUrl(`${prev}&with_genres=${genre}&sort_by=${sort}`);
	// 	}
	// 	console.log(url);
	// 	setPage(1);
	// };

	return (
		<div id="options-container">
			<select onChange={handleSortSelectChange} name="sorts" id="sort-select">
				<option value="">Sort by</option>
				{sorts.map((sort, index) => (
					<option value={sort.api} key={index}>
						{sort.web}
					</option>
				))}
			</select>
			<select
				onChange={handleGenreSelectChange}
				name="genres"
				id="genre-select"
			>
				<option value="">Genres</option>
				{genres.map((genre, index) => (
					<option value={genre.id} key={index}>
						{genre.name}
					</option>
				))}
			</select>
			{/* <button onClick={handleSaveClick}>Save</button> */}
		</div>
	);
}

export default Options;
