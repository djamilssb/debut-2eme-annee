import { SimFileSystemElement } from "./SimFileSystemElement";
import { SimDirectory } from "./SimDirectory";
import { SimFile } from "./SimFile";


export class SimFileSystem {

    constructor() {
        
    }

    mkdir(directoryName: string): void {
        
    }

    touch(fileName: string): void {
       
    }

    rm(elementName: string): void {
        
    }

    ls(recursive: boolean) : void {

    }

    cd(elementName: string): void {

    }
}


// Exemple d'utilisation
const fileSystem = new SimFileSystem();

fileSystem.mkdir('documents');
fileSystem.mkdir('pictures');

fileSystem.cd('documents');
fileSystem.touch('document1.txt');
fileSystem.touch('document2.txt');


fileSystem.cd('/');
fileSystem.cd('pictures');
fileSystem.touch('picture1.png');


fileSystem.cd('/');
console.log(fileSystem.ls(true));
// Output:
// Contents of directory root:
// documents
// pictures
// Contents of directory documents:
// document1.txt
// document2.txt
// Contents of directory pictures:
// picture1.png

fileSystem.cd('documents');
fileSystem.rm('document1.txt');

fileSystem.cd('/');
console.log(fileSystem.ls(true));
// Output:
// Contents of directory root:
// documents
// pictures
// Contents of directory documents:
// document2.txt
// Contents of directory pictures:
// picture1.png