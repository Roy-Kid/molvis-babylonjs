import * as BABYLON from "@babylonjs/core";
import * as Entity from "./entity";

type atoms = Array<Entity.Atom>;
type bonds = Array<Entity.Bond>;
interface PropObject {
    [key: string]: any;
}

export default class Entities {

    private atoms: atoms;
    private bonds: bonds;
    private scene: BABYLON.Scene;

    constructor(scene: BABYLON.Scene) {
        this.atoms = new Array();
        this.bonds = new Array();
        this.scene = scene;
    }

    public add_atoms(atoms: number[][], prop: PropObject | null = null) {

        for (let i=0; i<atoms.length; i++) {

            let aprop: PropObject = {};
            for (let key in prop) {
                aprop[key] = prop[key][i];
            }

            let atom = new Entity.Atom(atoms[i][0], atoms[i][1], atoms[i][2], aprop);
            this.atoms.push(atom);
        }
        console.log(this.atoms);
        this.draw_atoms();
    }

    public add_bonds(bonds: number[][]) {

        let start: number[];
        let end: number[];
        for (let i=0; i<bonds.length; i++) {
            try {
                start = this.atoms[bonds[i][0]].coordinate;
                end = this.atoms[bonds[i][1]].coordinate;
            }
            catch (e) {
                throw new Error("The index of the bond is out of range.");
            }

            let bond = new Entity.Bond(start, end);
            this.bonds.push(bond);
        }
        this.draw_bonds();
    }

    private draw_atoms() {
        for (let atom of this.atoms) {
            atom.render(this.scene);
        }
    }

    private draw_bonds() {
        for (let bond of this.bonds) {
            bond.render(this.scene);
        }
    }

}