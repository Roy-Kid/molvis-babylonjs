import * as BABYLON from "@babylonjs/core";
import * as MOLVIS from "./molvis/core";
import "@babylonjs/loaders";

export class Molvis {

    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;

    public camera: MOLVIS.Camera;

    private renderables: MOLVIS.Renderable[] = [];

    public constructor(canvas: HTMLCanvasElement) {

        this.engine = new BABYLON.Engine(canvas, true);
        this.scene = new BABYLON.Scene(this.engine);

        this.camera = new MOLVIS.Camera(canvas, true);
        this.camera.setPosition(new BABYLON.Vector3(0, 0, -10));

        this.addBox({
            orthogonal: {
                lx: 10,
                ly: 10,
                lz: 10
            },
            center: BABYLON.Vector3.Zero(),
            style: {
                type: 'line',
                color: BABYLON.Color3.White(),
                radius: 0.1
            }
        });

    }

    public initCramera(canvas: HTMLCanvasElement) {
        this.camera = new MOLVIS.Camera(canvas, true);
        this.camera.setPosition(new BABYLON.Vector3(0, 0, -10));
    }

    public addBox(attributes: MOLVIS.BoxAttributes) {
        this.addRenderable(
            new MOLVIS.Box(this.scene, attributes)
        );
    }

    public addRenderable(renderable: MOLVIS.Renderable) {
        this.renderables.push(renderable);
        renderable.create();
    }

    public addAtom(attributes: MOLVIS.AtomAttributes) {
        this.addRenderable(new MOLVIS.Atom(this.scene, attributes));
    }

    private _loopRenderables() {
        this.renderables.forEach((renderable) => {
            renderable.update();
        }
        )
    }

    public run() {
        this.engine.runRenderLoop(() => {
            this._loopRenderables();
            this.scene.render();
        });

        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }

}
