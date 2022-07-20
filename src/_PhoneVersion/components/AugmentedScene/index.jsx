import React from "react";
import { Scene, Entity } from "aframe-react";
export const AngmentedScene = () => {
	return (
		<>
			<Scene
			>
				<Entity
					castShadow={true}
					id="sphere"
					geometry={{ primitive: "sphere", radius: 0.1 }}
					material={{
						castShadow: true,
						reflectivity: 0.5,
						shininess: 30,
						color: "pink",
						roughness: 0.5,
						emissive: "cyan",
						shader: "standard",
					}}
					position={{ x: 0, y: 1.15, z: -3 }}
					light={{ type: "point", intensity: 0.4 }}
				/>

				<Entity
					animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
					animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
					animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
					cursor="fuse: true"
					cursorListener={true}
					castShadow={true}
					id="ring"
					geometry={{
						primitive: "ring",
						radiusInner: 0.1,
						radiusOuter: 0.2,
					}}
					material={{
						castShadow: true,
						reflectivity: 0.5,
						shininess: 30,
						color: "pink",
						roughness: 0.5,
						emissive: "cyan",
						shader: "standard",
					}}
					rotation={{ x: -20, y: 50, z: 0 }}
					position={{ x: 0, y: 2.15, z: -3 }}
					light={{ type: "point", intensity: 0.4 }}
				/>
				<Entity
					castShadow={true}
					rotation={{ x: -40, y: 10, z: -4 }}
					id="cylinder"
					geometry={{
						primitive: "cylinder",
						radius: 0.1,
						height: 0.7,
					}}
					material={{
						castShadow: true,
						reflectivity: 0.5,
						shininess: 30,
						color: "pink",
						roughness: 0.5,
						emissive: "cyan",
						shader: "standard",
					}}
					position={{ x: 1, y: 3.15, z: -2 }}
					light={{ type: "point", intensity: 0.4 }}
				/>

				<Entity
					castShadow={true}
					rotation={{ x: -40, y: 10, z: -4 }}
					id="cone"
					geometry={{
						primitive: "cone",
						radiusBottom: 0.1,
						height: 0.2,
						radiusTop: 0,
					}}
					material={{
						castShadow: true,
						reflectivity: 0.5,
						shininess: 30,
						color: "pink",
						roughness: 0.5,
						emissive: "cyan",
						shader: "standard",
					}}
					position={{ x: -1, y: 2, z: -1.5 }}
					light={{ type: "point", intensity: 0.4 }}
				/>
				<Entity primitive="a-camera">
				</Entity>

			</Scene>
		</>
	);
};

					// <Entity primitive="a-cursor" />
// <Entity primitive="a-light" type="ambient" color="#445451" />
//<Entity primitive="a-cursor"/>
