/* Conception d'un Système de Gestion de Fichiers (FileSystem) en TypeScript

Dans cet exercice, vous serez amené à concevoir un système de gestion de fichiers (FileSystem) simulé en utilisant TypeScript.
Un système de gestion de fichiers est une structure de données hiérarchique utilisée pour organiser, stocker et 
manipuler des fichiers sur un support de stockage.

L'objectif de cet exercice est de créer une simulation d'un système de gestion de fichiers qui permettra 
d'ajouter, supprimer, et lister les fichiers et répertoires, ainsi que de se déplacer dans le système de fichiers.

Implémentation des Classes SimFileSystemElement, SimFile et SimDirectory :

- Créez une classe SimFileSystemElement qui servira de modèle de base pour les fichiers et les répertoires.
- Implémentez une classe SimFile qui représente un fichier dans le système de fichiers.
- Implémentez une classe SimDirectory qui représente un répertoire dans le système de fichiers. 
    Ce répertoire devrait être capable de contenir d'autres fichiers et répertoires.
- Implémentation de la Classe SimFileSystem :
Créez une classe SimFileSystem qui représente le système de fichiers lui-même.
La classe SimFileSystem devrait avoir des méthodes :

- mkdir : pour créer des répertoires
- touch : pour créer des fichiers
- rm : pour supprimer des éléments
- ls : pour lister le contenu du répertoire courant. Si le boolean "recursive" est à true, 
        on souhaite également explorer les sous-dossier.
- cd : permet de descendre dans un sous répertoire si le nom est valide. 
- cd / : permet de retourner à la racine
(On oublie le "cd ..", pas de retour en arrière) */

import { SimDirectory } from "./SimDirectory";

export class SimFileSystemElement {
    name: string;
    parent: SimDirectory;

    constructor(name: string, parent: SimDirectory) {
        this.name = name;
        this.parent = parent;
    }
}