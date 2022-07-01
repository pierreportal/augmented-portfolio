import React from 'react';


export const Works:React.FunctionComponent = () => {
	const [aungmentedMode, setAugmentedMode] = React.useState<boolean>(false);

	const handleClick = () => {
	if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
		(DeviceMotionEvent as any).requestPermission().then((permissionState: any) => {
			if (permissionState === 'granted') {
				setAugmentedMode(true); 
			// DeviceMotionEvent.requestPermission() has been granted
			}
			}).catch(console.error);
		}
	}
	React.useEffect(handleClick,[]);
	return <button >Enter</button>;
}
