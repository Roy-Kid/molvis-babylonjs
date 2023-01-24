import * as BABYLON from "@babylonjs/core";
import { Box } from './box';

import nj from "numjs";

export default class MolvisScene {

    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;
    private canvas: HTMLCanvasElement;
    private _mainCamera: BABYLON.ArcRotateCamera;
    private box: Box;

    constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement) {
        this.engine = engine;
        this.canvas = canvas;
        this.scene = new BABYLON.Scene(engine);

        this.box = this.initBox();
        this._mainCamera = this.initCamera();
        this.initLight();

        // this.add_molecule(nj.array([[0, 0, 0], [0.5, 0.5, 0], [0.5, 0.5, 0.5], [0, 0.5, 0.5]]), nj.array([[0, 1], [1, 2], [2, 3]]));

        let a = nj.array([[0, 0, 0], [0.5, 0.5, 0], [0.5, 0.5, 0.5], [0, 0.5, 0.5]]);
        console.log(a.get(0, 0))
    }

    private initLight() {
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), this.scene);
        light.intensity = 0.7;
    }

    private initCamera() {
        const mainCamera = new BABYLON.ArcRotateCamera("mainCamera", 0, 0, 0, new BABYLON.Vector3(10, 10, 10), this.scene);
        mainCamera.setTarget(BABYLON.Vector3.Zero());
        mainCamera.attachControl(this.canvas, true);
        return mainCamera;
    }

    private initBox() {
        const box = new Box(10, 10, 10);
        box.render(this.scene);
        return box
    }


    public get mainCamera(): BABYLON.ArcRotateCamera {
        return this._mainCamera;
    }


    public add_particle(xyz:nj.NdArray<number[]>) {

        let natoms = xyz.shape[0];

        for (let i = 0; i < natoms; i++) {
            let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.5 }, this.scene);
            // sphere.position = new BABYLON.Vector3(xyz.get(i, 0), xyz.get(i, 1), xyz.get(i, 2));
            console.log(xyz.get(i, 0), xyz.get(i, 1), xyz.get(i, 2))
        }

    }

    public add_molecule(xyz:nj.NdArray<number[]>, connect:nj.NdArray<number[]>) {

        this.add_particle(xyz);

        // let nconnect = connect.shape[0];
        // for (let i = 0; i < nconnect; i++) {
        //     let line = BABYLON.MeshBuilder.CreateTube("bond", {
        //         path: [
        //             new BABYLON.Vector3(xyz.get(connect.get(i, 0), 0), xyz.get(connect.get(i, 0), 1), xyz.get(connect.get(i, 0), 2)),
        //             new BABYLON.Vector3(xyz.get(connect.get(i, 1), 0), xyz.get(connect.get(i, 1), 1), xyz.get(connect.get(i, 1), 2))
        //         ]
        //     }, this.scene);
        // }

    }

    public render() {
        this.scene.render();
    }

}