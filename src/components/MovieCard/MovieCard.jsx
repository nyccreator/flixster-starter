import "./MovieCard.css";

const MovieCard = ({ title, poster, rating }) => {
	return (
		<div className="movie-card">
			<img
				className="poster"
				src={`https://image.tmdb.org/t/p/w500${poster}`}
			/>
			<p className="title">{title}</p>
			<p className="rating">{rating.toFixed(2)}</p>
		</div>
	);
};

export default MovieCard;
