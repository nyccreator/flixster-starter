import { useState } from "react";
import "./MovieCard.css";
import defaultMovie from "../../assets/default-movie.png";
// import bookmarkFilled from "../../assets/bookmark-filled.svg";
// import bookmarkUnfilled from "../../assets/bookmark-unfilled.svg";
import bookmarkFilled from "../../assets/icons8-bookmark-48.png";
import bookmarkUnfilled from "../../assets/icons8-bookmark-48 (1).png";
import closedEye from "../../assets/closed-eye.png";
import openEye from "../../assets/open-eye.png";
import { Rating } from "@mui/material";

const MovieCard = ({
	movie,
	title,
	poster,
	rating,
	watchedList,
	setWatchedList,
	bookmarkedList,
	setBookmarkedList,
	onClick,
}) => {
	const [bookmarkPath, setBookmarkPath] = useState(bookmarkUnfilled);
	const [eyePath, setEyePath] = useState(closedEye);
	const path =
		poster === null ? defaultMovie : `https://image.tmdb.org/t/p/w500${poster}`;

	return (
		<div className="movie-card">
			<img className="poster" src={path} alt={title} onClick={onClick} />
			<p className="title" onClick={onClick}>
				{title}
			</p>
			<div className="move-card-container">
				<Rating
					style={{ color: "#e53170" }}
					name="read-only"
					value={rating / 2.0}
					precision={0.1}
					readOnly
				/>
				{/* <p className="rating">{rating.toFixed(2)}</p> */}
				<div className="icons">
					<img
						className="eye"
						src={eyePath}
						onClick={() => {
							if (watchedList.includes(movie)) {
								setWatchedList(
									watchedList.filter((element) => element !== movie)
								);
								setEyePath(closedEye);
							} else {
								setWatchedList([...watchedList, movie]);
								setEyePath(openEye);
							}
						}}
					/>
					<img
						className="bookmark"
						src={bookmarkPath}
						onClick={() => {
							if (bookmarkedList.includes(movie)) {
								setBookmarkedList(
									bookmarkedList.filter((element) => element !== movie)
								);
								setBookmarkPath(bookmarkUnfilled);
							} else {
								setBookmarkedList([...bookmarkedList, movie]);
								setBookmarkPath(bookmarkFilled);
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
