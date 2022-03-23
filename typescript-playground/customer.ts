export class Customer {
    /*private id: number;

    constructor(id: number) {
        this.id = id;
    }*/

    constructor(private id: number) {}

    fooBar(arg: string): string {

        setTimeout(() => {
            console.log('ID:', this.id);
        }, 2000);

        return '';
    }
}