import "./App.css";
import { useState } from "react";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
	const [url, setUrl] = useState(
		"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US"
	);
	const [prev, setPrev] = useState(
		"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US"
	);
	const [page, setPage] = useState(1);

	return (
		<div className="App">
			<Header setUrl={setUrl} prev={prev} setPrev={setPrev} setPage={setPage} />
			<Content
				url={url}
				setUrl={setUrl}
				prev={prev}
				page={page}
				setPage={setPage}
			/>
			<Footer />
		</div>
	);
};

export default App;
