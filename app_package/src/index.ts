import { Engine } from "@babylonjs/core";
import { CreateMolvisScene } from "./molvis/app";

export interface InitializeMolvisOptions {
    canvas: HTMLCanvasElement;
    assetsHostUrl?: string;
}

export function initializeMolvis(options: InitializeMolvisOptions) {
    if (options.assetsHostUrl) {
        console.log("Assets host URL: " + options.assetsHostUrl!);
    } else {
        console.log("No assets host URL provided");
    }

    const canvas = options.canvas;
    const engine = new Engine(canvas);
    const scene = CreateMolvisScene(engine, canvas);
    engine.runRenderLoop(() => {
        scene.render();
    });
    window.addEventListener("resize", () => {
        engine.resize();
    });
}

