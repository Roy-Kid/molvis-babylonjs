import { Engine } from "@babylonjs/core";
import MolvisApp from "./app";

export interface InitializeOptions {
    canvas: HTMLCanvasElement;
    assertHostUrl?: string;
}

export function initializeMolvis(options: InitializeOptions):MolvisApp {
    // if (options.assertHostUrl)

    const canvas = options.canvas;
    const engine = new Engine(canvas);
    const scene = new MolvisApp(engine, canvas);

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener("resize", () => {
        engine.resize();
    });

    return scene;

}