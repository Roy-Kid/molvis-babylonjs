import * as BABYLON from '@babylonjs/core';

export function toBabylonVector3(vector: number[]): BABYLON.Vector3 {
    return new BABYLON.Vector3(vector[0], vector[1], vector[2]);
}

export function to2DBabylonVector3(vectors: number[][]): BABYLON.Vector3[] {
    return vectors.map((vector) => {
        return toBabylonVector3(vector);
    });
}
