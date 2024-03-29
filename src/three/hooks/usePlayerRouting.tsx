import { useInterval } from "./useInterval";
import { useStore } from "./useStore";
import React from "react";

export const getUserPositionFromRoute = (location: string) => {
	return {
		about: { x: 10, y: 0, z: 6.5 },
		contact: { x: 8, y: 0, z: 10 },
		portfolio: { x: -6, y: 0, z: 10 },
	}[location];
};

export const mapPosToRoute = (pos: any) => {
	const { x, z: y } = pos;
	if (x <= -7) {
		return "Portfolio";
	} else if (x > -7 && y <= 1) {
		return "About";
	} else if (x > -7 && y > 1) {
		return "Contact";
	}
};

export const usePlayerRouting = (playerPosition: any) => {
	const {
		enableControls,
		setMainTitle,
		setSubtitle,
		setNavigateByPlayerMoves,
		setPlayGeneric,
		mainTitle,
		navigationZone,
	} = useStore();

	React.useEffect(() => {
		document.title = `Pierre Portal - ${mainTitle}`;
		window.history.replaceState(
			null,
			"",
			`/${mainTitle?.trim().toLocaleLowerCase()}`
		);
	}, [mainTitle]);

	useInterval(() => {
		const currentPage = mapPosToRoute(playerPosition);
		if (playerPosition.z > 16) {
			if (playerPosition.x < -1) {
				setSubtitle("where are you going?");
			}
			if (playerPosition.x < -7) {
				setSubtitle("You should come back...");
			}
			if (playerPosition.x < -13) {
				window.localStorage.setItem("escapeAttempt", "true");
				window.location.reload();
			}
		}

		if (playerPosition.z > 6) {
			setMainTitle("");
			setPlayGeneric(true);
		} else {
			setPlayGeneric(false);
		}
		if (
			!navigationZone &&
			currentPage &&
			mainTitle !== currentPage &&
			playerPosition.z < 6
		) {
			setNavigateByPlayerMoves(true);
			enableControls && setMainTitle(currentPage);
		}
	}, 500);
};
