import { useState } from "react";
import "./SearchContainer.css";

const SearchContainer = ({ setUrl, prev, setPage }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSearchClick = () => {
		if (searchQuery === "") {
			setUrl(prev);
		} else {
			setUrl(
				`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&include_video=false&language=en-US`
			);
		}
		setPage(1);
	};

	return (
		<div id="search-container">
			<input
				id="search-input"
				type="text"
				value={searchQuery}
				onChange={handleSearchChange}
			/>
			<button id="search-button" onClick={handleSearchClick}>
				Search
			</button>
		</div>
	);
};

export default SearchContainer;
