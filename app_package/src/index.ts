import { Engine } from "@babylonjs/core";
import { Molvis } from "./app";

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
    const app = new Molvis(canvas);
    app.run();

    setInterval(
        () => {
            app.camera.rotate(0.01, 0);
        },
        1
    )
}

