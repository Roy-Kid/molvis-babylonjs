import * as BABYLON from "@babylonjs/core";
import { Renderable } from "./renderable";

interface BoxAttributes {
    orthogonal?: {
        lx: number;
        ly: number;
        lz: number;
    },
    triclinic?: {
        a: number;
        b: number;
        c: number;
        alpha: number;
        beta: number;
        gamma: number;
    }
    center: BABYLON.Vector3
    style: {
        type: 'cylinder' | 'line';
        color: BABYLON.Color3;
        radius: number;
    }
}

export class Box extends Renderable {

    public attributes: BoxAttributes;

    public constructor(scene: BABYLON.Scene, attributes: BoxAttributes) {

        super(scene);

        this.attributes = attributes;

    }

    public create(): void {

        if (this.attributes?.orthogonal !== undefined) {
            this._createOrthBox();
        } else if (this.attributes?.triclinic !== undefined) {
            // this._renderTriclinicBox();
        } else {
            console.error('Invalid box type. Must be "orthogonal" or "triclinic".');
        }

    }

    public update(): void {

        if (this.attributes?.orthogonal !== undefined) {
            this._updateOrthBox();
        }

    }

    private _updateOrthBox() {

        let {lx, ly, lz} = this.attributes.orthogonal!;
        const {x, y, z} = this.attributes.center;

        for (let i = 0; i < this.meshes.length; i++) {
            this.meshes[i].scaling = new BABYLON.Vector3(lx, ly, lz);
            this.meshes[i].position = new BABYLON.Vector3(x, y, z);
        }

    }

    private _createOrthBox() {

        const {lx, ly, lz} = this.attributes.orthogonal!;

        const vertices = [
            new BABYLON.Vector3(-lx / 2, -ly / 2, -lz / 2),
            new BABYLON.Vector3(-lx / 2, -ly / 2, lz / 2),
            new BABYLON.Vector3(-lx / 2, ly / 2, -lz / 2),
            new BABYLON.Vector3(-lx / 2, ly / 2, lz / 2),
            new BABYLON.Vector3(lx / 2, -ly / 2, -lz / 2),
            new BABYLON.Vector3(lx / 2, -ly / 2, lz / 2),
            new BABYLON.Vector3(lx / 2, ly / 2, -lz / 2),
            new BABYLON.Vector3(lx / 2, ly / 2, lz / 2),
        ];
        
        const indices = [
            0, 1, 2, 3, 4, 5, 6, 7,
            0, 2, 1, 3, 4, 6, 5, 7,
            0, 4, 1, 5, 2, 6, 3, 7
        ];

        if (this.attributes.style.type === 'line') {
            for (let i = 0; i < indices.length; i += 2) {
                this.meshes.push(BABYLON.MeshBuilder.CreateLines("edge", { points: [vertices[indices[i]], vertices[indices[i + 1]]] }, this.scene));
            }
        }

    }

}