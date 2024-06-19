import { useState } from "react";
import "./SideBar.css";
import sideBarIcon from "../../assets/arrow-left-1-svgrepo-com.svg";
import SideBarCard from "../SideBarCard/SideBarCard";

function SideBar({
	watchedList,
	setWatchedList,
	bookmarkedList,
	setBookmarkedList,
}) {
	const [width1, setWidth1] = useState(0);
	const [width2, setWidth2] = useState(0);
	const [padding, setPadding] = useState(0);
	const [display, setDisplay] = useState("none");

	const openSideBar = () => {
		setWidth1(15);
		setWidth2("fit-content");
		setPadding(0.5);
		setDisplay("block");
	};

	const closeSideBar = () => {
		setWidth1(0);
		setWidth2(0);
		setPadding(0);
		setDisplay("none");
	};

	return (
		<div id="side-bar">
			<div
				id="icon-container"
				onClick={() => {
					if (width1 === 0) {
						openSideBar();
					} else {
						closeSideBar();
					}
				}}
			>
				<img id="side-bar-icon" src={sideBarIcon} />
			</div>
			<div
				id="lists"
				style={{ width: `${width1}rem`, padding: `${padding}rem` }}
			>
				<p style={{ display: `${display}` }}>Watched</p>
				{watchedList.map((movie, index) => (
					<SideBarCard
						key={index}
						movie={movie}
						title={movie.title}
						poster={movie.poster_path}
						rating={movie.vote_average}
						watchedList={watchedList}
						setWatchedList={setWatchedList}
						bookmarkedList={bookmarkedList}
						setBookmarkedList={setBookmarkedList}
					/>
				))}
				<p style={{ display: `${display}` }}>Favorites</p>
				{bookmarkedList.map((movie, index) => (
					<SideBarCard
						key={index}
						movie={movie}
						title={movie.title}
						poster={movie.poster_path}
						rating={movie.vote_average}
						watchedList={watchedList}
						setWatchedList={setWatchedList}
						bookmarkedList={bookmarkedList}
						setBookmarkedList={setBookmarkedList}
					/>
				))}
			</div>
		</div>
	);
}

export default SideBar;
