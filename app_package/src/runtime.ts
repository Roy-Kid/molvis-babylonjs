import { Engine } from "@babylonjs/core";
import MolvisSence from "./scene";

export interface InitializeOptions {
    canvas: HTMLCanvasElement;
    assertHostUrl?: string;
}

export function initializeMolvis(options: InitializeOptions) {
    // if (options.assertHostUrl)

    const canvas = options.canvas;
    const engine = new Engine(canvas);
    const scene = new MolvisSence(engine, canvas);

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener("resize", () => {
        engine.resize();
    });

    return scene;

}