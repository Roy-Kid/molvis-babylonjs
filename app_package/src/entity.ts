import * as BABYLON from "@babylonjs/core";

class Atom {

    private x: number;
    private y: number;
    private z: number;

    constructor(x:number, y:number, z:number, label:string) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public render(scene: BABYLON.Scene) {
        let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.5}, scene);
    }

}