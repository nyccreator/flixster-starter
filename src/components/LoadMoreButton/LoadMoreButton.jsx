import "./LoadMoreButton.css";

const LoadMoreButton = ({ page, setPage }) => {
	const handleLoadMoreClick = () => {
		setPage(page + 1);
	};

	return (
		<button id="load-more-button" onClick={handleLoadMoreClick}>
			Load More
		</button>
	);
};

export default LoadMoreButton;
