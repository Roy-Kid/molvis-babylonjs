import * as BABYLON from "@babylonjs/core";
import * as MOLVIS from "./molvis/core";
import "@babylonjs/loaders";

export class Molvis {

    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;

    public camera: MOLVIS.Camera;

    public constructor(canvas: HTMLCanvasElement) {

        this.engine = new BABYLON.Engine(canvas, true);
        this.scene = new BABYLON.Scene(this.engine);

        this.camera = new MOLVIS.Camera(canvas, true);
        this.camera.setPosition(new BABYLON.Vector3(0, 0, -10));

    }

    public run() {
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }

}
