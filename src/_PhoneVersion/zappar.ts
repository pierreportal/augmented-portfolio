
import * as Zappar from "@zappar/zappar";


const canvas:any = document.getElementsByTagName('body');
const gl = canvas?.getContext('webgl');

const pipeline:any = new Zappar.Pipeline();
pipeline.getContextSet(gl);

export const source = new Zappar.CameraSource(pipeline, Zappar.cameraDefaultDeviceID());

Zappar.permissionRequestUI().then(granted => {
    if (granted) source.start();
    else Zappar.permissionDeniedUI();
});

