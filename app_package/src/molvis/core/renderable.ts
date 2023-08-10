import * as BABYLON from '@babylonjs/core';

export abstract class Renderable {

    public abstract create(): void;

    public abstract update(): void;

    protected scene: BABYLON.Scene;

    protected meshes: BABYLON.Mesh[] = [];

    public attributes: object = {};
    
    public constructor(scene: BABYLON.Scene) {
        this.scene = scene;
    }

}