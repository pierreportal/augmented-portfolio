import React from "react";
import { ShowRoomRelativeSpace } from "./ShowRoomRelativeSpace";
import { Selectable } from "../objects/Selectable";

import { useStore } from "../../../three/hooks/useStore";
const xRange = [-20, -10];
const yRange = [1, 8];
const zRange = [-5, 5];

const rangeRandom = ([min, max]: any) => {
	return Math.random() * (max - min) + min;
};

const _ShowRoom: React.FunctionComponent = () => {
	const [selected, setSelected] = React.useState<any>(null);
	const { githubGraphData }: any = useStore();

	const floatItems = githubGraphData?.user.pinnedItems.nodes.map(
		(node: any) => {
			return (
				<Selectable
					key={node.id}
					callback={() => {
						window.open(node.url, '_blank');
						setSelected(node)
					}}
					tip={node.name}
					userInstructionTip={node.url}
				>
					<mesh
						castShadow
						receiveShadow
						position={[
							rangeRandom(xRange),
							rangeRandom(yRange),
							rangeRandom(zRange),
						]}
					>
						<sphereGeometry attach="geometry" args={[0.5]} />
						<meshPhongMaterial
							color="white"
							emissive={"black"}
							emissiveIntensity={1}
						/>
					</mesh>
				</Selectable>
			);
		}
	);

	return (
		<group>
			<ShowRoomRelativeSpace>{floatItems}</ShowRoomRelativeSpace>
		</group>
	);
};

export const ShowRoom = React.memo(_ShowRoom);
