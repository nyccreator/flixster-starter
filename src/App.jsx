import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import Header from "./components/Header/Header";

const App = () => {
	const [url, setUrl] = useState(
		"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc"
	);
	const [prev, setPrev] = useState("");
	const [page, setPage] = useState(1);

	return (
		<div className="App">
			<Header setUrl={setUrl} prev={prev} setPrev={setPrev} setPage={setPage} />
			<MovieList url={url} page={page} setPage={setPage} />
		</div>
	);
};

export default App;
