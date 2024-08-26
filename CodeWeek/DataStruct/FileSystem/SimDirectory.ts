import { SimFileSystemElement } from "./SimFileSystemElement";

export class SimDirectory extends SimFileSystemElement {
    children:SimFileSystemElement[] = []

    constructor(name:string,parent:SimDirectory){
        super(name,parent)
        this.children = [];

    }
}