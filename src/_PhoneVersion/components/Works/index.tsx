import React from 'react';


export const Works:React.FunctionComponent = () => {
	const [t, setT] = React.useState<any>('jbk');

	const testMoving = (event:any) => {
			setT('moving');
	}

	
	const handleClick = () => {


	if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
		(DeviceMotionEvent as any).requestPermission().then((permissionState: any) => {
			setT(permissionState); 
			if (permissionState === 'granted') {
			// DeviceMotionEvent.requestPermission() has been granted
			}
			}).catch(console.error);
		}
	}
	React.useEffect(handleClick,[]);
	return <button >Works {t}</button>;
}
