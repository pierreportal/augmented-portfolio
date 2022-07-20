import React from 'react';
import { AngmentedScene } from '../AugmentedScene';

export const Works:React.FunctionComponent = () => {
	const [augmentedMode, setAugmentedMode] = React.useState<boolean>(false);

	const handleClick = () => {
	if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
		(DeviceMotionEvent as any).requestPermission().then((permissionState: any) => {
			if (permissionState === 'granted') {
				setAugmentedMode(true);
			}
			}).catch(console.error);
		}
	}
	return <AngmentedScene/> 
}
