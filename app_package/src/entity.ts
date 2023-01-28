import * as BABYLON from "@babylonjs/core";

const test_atom_palette = new Map([
    ["O", "#ff6666"],
    ["H", "#6666ff"]
]);

const test_atom_diameter = new Map([
    ["O", 0.8],
    ["H", 0.5]
]);

type prop = {
    [key: string]: any;
}

class Atom {

    public x: number;
    public y: number;
    public z: number;
    public prop: prop;

    constructor(x: number, y: number, z: number, prop: prop = {}) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.prop = prop;
    }

    public render(scene: BABYLON.Scene) {

        let options = {
            diameter: 1
        }

        let material = new BABYLON.StandardMaterial("material", scene);

        if (this.prop.hasOwnProperty("type")) {
            let color = test_atom_palette.get(this.prop["type"]);
            console.log(color);
            if (color != undefined) {
                material.diffuseColor = BABYLON.Color3.FromHexString(color);
            }
            let diameter = test_atom_diameter.get(this.prop["type"]);
            if (diameter != undefined) {
                options["diameter"] = diameter;
            }
        }

        let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", options, scene);
        sphere.position = new BABYLON.Vector3(this.x, this.y, this.z);
        sphere.material = material;

    }

    public get coordinate() {
        return [this.x, this.y, this.z];
    }

}

class Bond {

    public start: number[];
    public end: number[];
    public prop: prop;

    constructor(start: number[], end: number[], prop: prop = {}) {
        this.start = start;
        this.end = end;
        this.prop = prop;
    }

    public render(scene: BABYLON.Scene) {
            
        let material = new BABYLON.StandardMaterial("material", scene);
        material.diffuseColor = BABYLON.Color3.FromHexString("#b300ff");

        let cylinder = BABYLON.MeshBuilder.CreateTube("cylinder", {
            path: [new BABYLON.Vector3(this.start[0], this.start[1], this.start[2]), new BABYLON.Vector3(this.end[0], this.end[1], this.end[2])],
            radius: 0.1
        }, scene);
        cylinder.material = material;

    }

}

export {Atom, Bond};