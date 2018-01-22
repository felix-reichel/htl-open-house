export class NameEntry {
    public id: number;
    public name: String;
    public timestamp: String = new Date().toUTCString();
    constructor(name: String) {
        this.id = 0;
        this.name = name;
    }
}