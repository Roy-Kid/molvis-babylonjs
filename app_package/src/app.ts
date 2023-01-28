import * as BABYLON from "@babylonjs/core";
import { Box } from './box';
import Entities from './entities';

export default class MolvisApp {

    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;
    private canvas: HTMLCanvasElement;
    private _mainCamera: BABYLON.ArcRotateCamera;
    private _box: Box;
    
    public _entities: Entities;

    constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement) {
        this.engine = engine;
        this.canvas = canvas;
        this.scene = this.init_scene();
        this.init_light();
        this.init_axes();
        
        this._mainCamera = this.init_camera();
        this._box = this.init_box();
        this._entities = this.init_entities();
        
    }

    private init_scene() {
        const scene = new BABYLON.Scene(this.engine);
        return scene;
    }

    private init_entities() {
        return new Entities(this.scene);
    }

    private init_light() {
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), this.scene);
        light.intensity = 0.7;
    }

    private init_camera() {
        const mainCamera = new BABYLON.ArcRotateCamera("mainCamera", 0, 0, 0, new BABYLON.Vector3(10, 10, 10), this.scene);
        mainCamera.setTarget(BABYLON.Vector3.Zero());
        mainCamera.attachControl(this.canvas, true);
        return mainCamera;
    }

    private init_box() {
        const box = new Box(10, 10, 10);
        box.render(this.scene);
        return box
    }

    private init_axes() {
        const axes = new BABYLON.AxesViewer(this.scene, 5);
    }


    public get mainCamera(): BABYLON.ArcRotateCamera {
        return this._mainCamera;
    }

    public get box(): Box {
        return this._box;
    }

    public get entities(): Entities {
        return this._entities;
    }

    public render() {
        this.scene.render();
    }

}