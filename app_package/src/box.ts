import * as BABYLON from "@babylonjs/core";

export class Box {

    private xhi: number;
    private yhi: number;
    private zhi: number;
    private xlo: number;
    private ylo: number;
    private zlo: number;
    private xy: number;
    private xz: number;
    private yz: number;

    constructor(xhi:number, yhi:number, zhi:number, xlo=0, ylo=0, zlo=0, xy=0, xz=0, yz=0) {
        this.xhi = xhi;
        this.yhi = yhi;
        this.zhi = zhi;
        this.xlo = xlo;
        this.ylo = ylo;
        this.zlo = zlo;
        this.xy = xy;
        this.xz = xz;
        this.yz = yz;
    }

    public render(scene: BABYLON.Scene) {

        let path = [
            new BABYLON.Vector3(this.xlo, this.ylo, this.zlo),
            new BABYLON.Vector3(this.xhi, this.ylo, this.zlo),
            new BABYLON.Vector3(this.xhi, this.yhi, this.zlo),
            new BABYLON.Vector3(this.xlo, this.yhi, this.zlo),
            new BABYLON.Vector3(this.xlo, this.ylo, this.zlo),
            
            new BABYLON.Vector3(this.xlo, this.ylo, this.zhi),
            new BABYLON.Vector3(this.xhi, this.ylo, this.zhi),
            new BABYLON.Vector3(this.xhi, this.yhi, this.zhi),
            new BABYLON.Vector3(this.xlo, this.yhi, this.zhi),
            new BABYLON.Vector3(this.xlo, this.ylo, this.zhi),
            new BABYLON.Vector3(this.xlo, this.yhi, this.zhi),

            new BABYLON.Vector3(this.xlo, this.yhi, this.zlo),
            new BABYLON.Vector3(this.xhi, this.yhi, this.zlo),
            new BABYLON.Vector3(this.xhi, this.yhi, this.zhi),
            new BABYLON.Vector3(this.xhi, this.ylo, this.zhi),

            new BABYLON.Vector3(this.xhi, this.ylo, this.zlo),

        ];

        let lines = BABYLON.MeshBuilder.CreateLines("lines", {points: path}, scene);

    }
        
}

