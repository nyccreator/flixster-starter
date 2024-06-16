const MovieCard = ({ title, poster, rating }) => {
	return (
		<>
			<h2>{title}</h2>
			<img src={`https://image.tmdb.org/t/p/w500${poster}`} />
			<h3>{rating}</h3>
		</>
	);
};

export default MovieCard;
