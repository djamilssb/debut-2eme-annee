import { SimFileSystemElement } from "./SimFileSystemElement";
import { SimDirectory } from "./SimDirectory";
export class SimFile extends SimFileSystemElement {

    constructor(name: string, parent: SimDirectory) {
        super(name, parent)
    }
}