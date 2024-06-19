import { useState } from "react";
import MovieList from "../MovieList/MovieList";
import SideBar from "../SideBar/SideBar";
import "./Content.css";

function Content({ url, setUrl, prev, page, setPage }) {
	const [watchedList, setWatchedList] = useState([]);
	const [bookmarkedList, setBookmarkedList] = useState([]);

	return (
		<div id="content">
			<MovieList
				url={url}
				setUrl={setUrl}
				prev={prev}
				page={page}
				setPage={setPage}
				watchedList={watchedList}
				setWatchedList={setWatchedList}
				bookmarkedList={bookmarkedList}
				setBookmarkedList={setBookmarkedList}
			/>
			<SideBar
				watchedList={watchedList}
				setWatchedList={setWatchedList}
				bookmarkedList={bookmarkedList}
				setBookmarkedList={setBookmarkedList}
			/>
		</div>
	);
}

export default Content;
