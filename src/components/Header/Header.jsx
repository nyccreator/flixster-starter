import SearchContainer from "../SearchContainer/SearchContainer";
import "./Header.css";

const Header = ({ setUrl, setPage, prev, setPrev }) => {
	const handleDiscoverClick = () => {
		setUrl(
			"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US"
		);
		setPrev(
			"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US"
		);
		setPage(1);
	};

	const handleTrendingClick = () => {
		setUrl(
			"https://api.themoviedb.org/3/trending/movie/day?include_adult=false&include_video=false&language=en-US"
		);
		setPrev(
			"https://api.themoviedb.org/3/trending/movie/day?include_adult=false&include_video=false&language=en-US"
		);
		setPage(1);
	};

	return (
		<div id="header">
			<nav id="nav">
				<p id="brand">Flixster</p>
				<p id="discover" className="nav" onClick={handleDiscoverClick}>
					Discover
				</p>
				<p id="trending" className="nav" onClick={handleTrendingClick}>
					Trending
				</p>
				<p id="recommended" className="nav">
					Recommended
				</p>
			</nav>
			{/* <div id="search-container-component"> */}
			<SearchContainer setUrl={setUrl} prev={prev} setPage={setPage} />
			{/* </div> */}
		</div>
	);
};

export default Header;
