import { useState, useEffect } from "react";
import "./Modal.css";
import defaultMovie from "../../assets/default-movie.png";
import { Rating } from "@mui/material";

function Modal({ show, onClose, id, title, poster, rating, overview }) {
	const apiKey = import.meta.env.VITE_API_KEY;
	const [trailerKey, setTrailerKey] = useState("");
	const [runtime, setRuntime] = useState(0);
	const posterPath =
		poster === null ? defaultMovie : `https://image.tmdb.org/t/p/w500${poster}`;
	const trailerPath = `https://www.youtube.com/embed/${trailerKey}`;

	useEffect(() => {
		async function fetchTrailers() {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
			);
			const data = await response.json();
			setTrailerKey(
				data.results.find((element) => element.type === "Trailer").key
			);
		}

		fetchTrailers();
	}, []);

	useEffect(() => {
		async function fetchDetails() {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
			);
			const data = await response.json();
			setRuntime(data.runtime);
			console.log(data.runtime);
		}

		fetchDetails();
	}, []);

	if (!show) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<button onClick={onClose}>Close</button>
				</div>
				<div className="modal-body">
					<iframe
						width="560"
						height="315"
						src={trailerPath}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
					<p className="modal-title">{title}</p>
					<Rating
						style={{ color: "#e53170" }}
						name="read-only"
						value={rating / 2.0}
						precision={0.1}
						readOnly
					/>
					{/* <p className="rating">{rating.toFixed(2)}</p> */}
					<p className="overview">{overview}</p>
					<p className="runtime">
						{Math.floor(runtime / 60)}h {runtime % 60}min
					</p>
				</div>
			</div>
		</div>
	);
}

export default Modal;
