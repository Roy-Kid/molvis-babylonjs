import { Molvis } from "./app";
import { to2DBabylonVector3 } from "./molvis/core/utils";

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

    const atoms = to2DBabylonVector3([
        [-5.66042, 0.96927, 0.06378],
        [-4.20691, 0.60757, -0.05879],
        [-4.63881, 1.97289, 0.00364],
        [-3.84473, 0.24172, -1.01101],
        [-3.70065, 0.20409, 0.80876],
        [-6.15228, 0.81418, 1.01549],
        [-6.29636, 0.85181, -0.80428]
    ]);

    const types = [
        "C",
        "C",
        "O",
        "H",
        "H",
        "H",
        "H",
    ];

    for (let i = 0; i < atoms.length; i++) {
        app.addAtom({ position: atoms[i], type: types[i] });
    }

    // setInterval(
    //     () => {
    //         app.camera.rotate(0.01, 0);
    //     },
    //     1
    // )
}

