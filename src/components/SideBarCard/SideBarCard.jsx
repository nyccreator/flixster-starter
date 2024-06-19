import { useState } from "react";
import "./SideBarCard.css";
import defaultMovie from "../../assets/default-movie.png";
// import bookmarkFilled from "../../assets/bookmark-filled.svg";
// import bookmarkUnfilled from "../../assets/bookmark-unfilled.svg";
import bookmarkFilled from "../../assets/icons8-bookmark-48.png";
import bookmarkUnfilled from "../../assets/icons8-bookmark-48 (1).png";
import closedEye from "../../assets/closed-eye.png";
import openEye from "../../assets/open-eye.png";

function SideBarCard({
	movie,
	title,
	poster,
	watchedList,
	setWatchedList,
	bookmarkedList,
	setBookmarkedList,
}) {
	const [bookmarkPath, setBookmarkPath] = useState(
		bookmarkedList.includes(movie) ? bookmarkFilled : bookmarkUnfilled
	);
	const [eyePath, setEyePath] = useState(
		watchedList.includes(movie) ? openEye : closedEye
	);
	const posterPath =
		poster === null ? defaultMovie : `https://image.tmdb.org/t/p/w500${poster}`;
	return (
		<div className="side-bar-card">
			<img className="side-bar-poster" src={posterPath} />
			<div className="side-bar-card-info">
				<p className="side-bar-card-title">{title}</p>
			</div>
			{/* <div className="side-bar-icons"> */}
			<img
				className="eye"
				src={eyePath}
				onClick={() => {
					if (watchedList.includes(movie)) {
						setWatchedList(watchedList.filter((element) => element !== movie));
						setEyePath(closedEye);
					} else {
						setWatchedList([...watchedList, movie]);
						setEyePath(openEye);
					}
				}}
			/>
			<img
				className="side-bar-bookmark"
				src={bookmarkPath}
				onClick={() => {
					if (bookmarkedList.includes(movie)) {
						setBookmarkedList(
							bookmarkedList.filter((element) => element !== movie)
						);
						setBookmarkPath(bookmarkUnfilled);
					} else {
						setBookmarkedList(...bookmarkedList, movie);
						setBookmarkPath(bookmarkFilled);
					}
				}}
			/>
		</div>
		// </div>
	);
}

export default SideBarCard;
