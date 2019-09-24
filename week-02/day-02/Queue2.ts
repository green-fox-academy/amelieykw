'use strict';

import { Node } from './Node';

interface Queue {
    empty(): boolean;
    peek(): string;
    add(value: string): void;
    remove(): string;
}

class Queue2 implements Queue {
    private _head: Node;
    private _tail: Node;

    public empty(): boolean {
        if (this._head == this._tail) {
            return true;
        }
        return false;
    }

    public peek(): string {
        // corner case 
        if (this.empty()) {
            return undefined;
        }
        return this._head.value;
    }

    public add(value: string): void {
        let newNode = new Node(value, null);
        // corner case
        if (this.empty()) {
            this._head = newNode;
        }
        this._tail.next = newNode;
        this._tail = this._tail.next;
    }

    public remove(): string {
        // corner case
        if (this.empty()) {
            return undefined;
        }
        let head = this._head;
        this._head = this._head.next;
        return head.value;
    }   
}