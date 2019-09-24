'use strict';

export class Node {
    private _value: string;
    private _next: Node;

    constructor(value: string, next: Node) {
        this._value = value;
        this._next = next;
    }

    get value(): string {
        return this._value;
    }

    get next(): Node {
        return this._next;
    }

    set next(nextNode: Node) {
        this._next = nextNode;
    }
}