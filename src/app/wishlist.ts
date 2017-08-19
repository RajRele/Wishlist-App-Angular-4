export class Wishlist {
    id: number;
    title: string = '';
    complete: boolean = false;
    date: Date;

    constructor(values: object= {}) {
        Object.assign(this, values);
    }
}
