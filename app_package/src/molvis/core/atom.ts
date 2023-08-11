import * as BABYLON from "@babylonjs/core";
import { Renderable } from "./renderable";

export interface AtomAttributes {
    position: BABYLON.Vector3;
    type: string;
}

export class Atom extends Renderable {

    private _attributes!: AtomAttributes;

    public constructor(scene: BABYLON.Scene, attributes: AtomAttributes) {
        super(scene);
        this.attributes = attributes;
    }

    public set attributes(attributes: AtomAttributes) {
        this._attributes = attributes;
    }

    public get attributes(): AtomAttributes {
        return this._attributes;
    }

    public create(): void {
        let mesh = BABYLON.MeshBuilder.CreateSphere("atom", { diameter: 1 }, this.scene);
        this.meshes.push(mesh);
    }

    public update(): void {
        const {x, y, z} = this.attributes.position;
        for (let i = 0; i < this.meshes.length; i++) {
            this.meshes[i].position = new BABYLON.Vector3(x, y, z);
        }
    }

}