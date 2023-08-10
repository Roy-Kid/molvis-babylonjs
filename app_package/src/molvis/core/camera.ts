import * as BABYLON from "@babylonjs/core";

export class Camera {

    private camera: BABYLON.ArcRotateCamera;

    public constructor(canvas: HTMLCanvasElement, attachControl: boolean) {

        this.camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 0, BABYLON.Vector3.Zero(), null!);
        this.camera.attachControl(canvas, attachControl);

    }

    public rotate(alpha: number, beta: number) {

        this.camera.alpha += alpha;
        this.camera.beta += beta;

    }

    public setPosition(position: BABYLON.Vector3) {

        this.camera.setPosition(position);

    }

}