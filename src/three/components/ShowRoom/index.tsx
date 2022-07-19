import React from "react";
import { ArtWork } from "./ArtWork";
import { FlyingLightBall } from "../objects/FlyingLightBall";
import { ShowRoomRelativeSpace } from "./ShowRoomRelativeSpace";
import { Selectable } from "../objects/Selectable";

import {useStore} from "../../../three/hooks/useStore";
const xRange = [-20, -10];
const yRange = [1, 8];
const zRange = [-5, 5];

const rangeRandom = ([min, max]: any) => {
	return Math.random() * (max - min) + min;
}

const _ShowRoom: React.FunctionComponent = () => {
	const {githubGraphData}:any = useStore();


	
	const floatItems = githubGraphData?.user.pinnedItems.nodes.map((node:any, index:number) => {
		return <Selectable callback={() => false} tip={node.name}>
			<mesh position={[rangeRandom(xRange), rangeRandom(yRange), rangeRandom(zRange)]}>
				<sphereGeometry attach="geometry" args={[.5]} />
				<meshPhongMaterial color="black" emissive="red" emissiveIntensity={1} />
			</mesh>
		</Selectable>
	})

	return !!floatItems ? (
		<group>
			<ShowRoomRelativeSpace>
				{floatItems} 
			</ShowRoomRelativeSpace>
		</group>
	): <></>;
};

export const ShowRoom = React.memo(_ShowRoom);
